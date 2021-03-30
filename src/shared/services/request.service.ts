import { from, Observable, of } from 'rxjs';
import { catchError, filter, pluck } from 'rxjs/operators';
import { MutationOptions } from '@apollo/client';
import _ from 'lodash';
import { apolloClient } from '../shared/graph/apollo-client';

import {
  FieldNode,
  OperationDefinitionNode,
} from 'graphql';

// TODO: check types DefinitionNode (selectionSet part of OperationDefinitionNode)
// TODO: check types SelectionNode (name part of FieldNode)
//
// type DefinitionNode =
//   | ExecutableDefinitionNode
//   | TypeSystemDefinitionNode
//   | TypeSystemExtensionNode;
//
// type ExecutableDefinitionNode =
//   | OperationDefinitionNode
//   | FragmentDefinitionNode;

export function Mutation({mutation, variables}: MutationOptions): Observable<any> {

  const dataFields = mutation.definitions.reduce((acc: string[], item) => {
    const {selectionSet} = item as OperationDefinitionNode;
    selectionSet.selections.forEach(selectionNode => {
      const {name} = selectionNode as FieldNode;
      acc.push(name.value)
    });
    return acc;
  }, []);

  return from(apolloClient.mutate({
    mutation,
    variables,
  })).pipe(
    catchError(error => of({data: null, errorMsg: `${error}`}))
  ).pipe(
    filter((res) => {
      return _.has(res?.data, dataFields);
    }),
    pluck('data'),
    pluck(...dataFields),
  )
}
