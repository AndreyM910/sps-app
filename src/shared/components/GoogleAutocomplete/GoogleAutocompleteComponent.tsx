import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import { TextInput, View } from 'react-native';
import { colors, fullWidth } from '../../styles/styles';
import SAddressInputComponent, { SAddressInputComponentProps } from '../SGeoTextInput/SAddressInputComponent';
import { CoordinatesInterface } from '../../Interfaces/coordinates.interface';

// navigator.geolocation = require('@react-native-community/geolocation');

export type OnAddressChange = (data: {address: string, coordinates: CoordinatesInterface}) => void;

const AddressInputComponentProps = React.forwardRef<TextInput, SAddressInputComponentProps>((props, ref) => <SAddressInputComponent innerRef={ref} {...props}/>);

export interface GoogleAutocompleteComponentProps {
  onChange: OnAddressChange;
  address?: string;
}
const GoogleAutocompleteComponent = ({onChange, address}: GoogleAutocompleteComponentProps) => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      // currentLocation={true}
      onPress={(data, details = null) => {
        if (details) {
          onChange({address: details.formatted_address, coordinates: {latitude: details.geometry.location.lat, longitude: details.geometry.location.lng}})
        }
      }}
      debounce={500}
      fetchDetails={true}
      styles={{
        row: {
          backgroundColor: colors.backgroundColor,
          padding: 13,
          height: 44,
          flexDirection: 'row',
        },
        separator: {
          height: 0.5,
          backgroundColor: '#c8c7cc',
        },
        listView: {
          width: fullWidth - 60,
        },
        poweredContainer: {
          display: 'none'
        },
      }}
      textInputProps={{
        InputComp: AddressInputComponentProps,
        title: 'Address',
        placeholder: address || 'Search',
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: 'en',
      }}
    />
  );
};

export default GoogleAutocompleteComponent;
