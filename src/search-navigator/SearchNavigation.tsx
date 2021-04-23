import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { nonHeaderRoute } from '../shared/utils/nonHeaderRoute';
import SearchUsersComponent from './search-users-screen/SearchUsersComponent';
import SearchFilterComponent from './search-filters-screen/SearchFiltersComponent';

export const SearchNavigation = {
  Search: SearchStackNavigation,
};

export const SearchNavigationOptions: {[key: string]: any} = {
  Search: {},
};

const SearchScreens = {
  SearchUsers: SearchUsersComponent,
  SearchFilters: SearchFilterComponent,
};

const SearchStack = createStackNavigator();

const SearchRouteOptions: {[key: string]: any} = {
  SearchUsers: nonHeaderRoute,
  SearchFilters: nonHeaderRoute,
};

export function SearchStackNavigation() {
  return <SearchStack.Navigator initialRouteName={'SearchUsers'}>
    {Object.entries(SearchScreens).map(([name, component]) => (
      <SearchStack.Screen key={name} name={name} component={component} options={SearchRouteOptions[name]}/>
    ))}
  </SearchStack.Navigator>
}
