import { from, Observable, of } from 'rxjs';
import { catchError, filter, pluck } from 'rxjs/operators';
import { DocumentNode, MutationOptions, QueryOptions } from '@apollo/client';
import _ from 'lodash';
import { apolloClient } from '../graph/apollo-client';

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

export function mutation({mutation, variables}: MutationOptions): Observable<any> {
  const dataFields = getDataFields(mutation);

  return from(apolloClient.mutate({
    mutation,
    variables,
  })).pipe(
    catchError(error => of({data: null, errorMsg: `${error}`})),
    filter((res) => {
      return _.has(res?.data, dataFields);
    }),
    pluck('data'),
    pluck(...dataFields),
  )
}

export function query({query, variables}: QueryOptions): Observable<any> {
  const dataFields = getDataFields(query);

  return from(apolloClient.query({
    query,
    variables,
  })).pipe(
    catchError(error => of({data: null, errorMsg: `${error}`})),
    filter((res) => {
      return _.has(res?.data, dataFields);
    }),
    pluck('data'),
    pluck(...dataFields),
  )
}

function getDataFields({definitions}: DocumentNode) {
  return definitions.reduce((acc: string[], item) => {
    const {selectionSet} = item as OperationDefinitionNode;
    selectionSet.selections.forEach(selectionNode => {
      const {name} = selectionNode as FieldNode;
      acc.push(name.value)
    });
    return acc;
  }, []);
}

export function sendRequest(observable: Observable<any>, callback?: (res: any) => void) {
  const $obs = observable.subscribe(res => {
    callback && callback(res);
    $obs.unsubscribe();
  });
  return {loading: true};
}
