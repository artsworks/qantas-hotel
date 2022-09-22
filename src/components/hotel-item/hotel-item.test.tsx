import React from 'react';

import { render, screen } from '@testing-library/react';

import { HotelItem } from './hotel-item';
import { Hotel } from '../../models';

describe('component: hotel-item', () => {
  let sampleHotel: Hotel;

  beforeEach(() => {
    sampleHotel = {
      id: 'cxd650nuyo',
      property: {
        propertyId: 'P107801',
        title: 'Courtyard by Marriott Sydney-North Ryde',
        address: ['7-11 Talavera Rd', 'North Ryde'],
        previewImage: {
          url: 'https://unsplash.it/145/125/?random',
          caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
          imageType: 'PRIMARY',
        },
        rating: {
          ratingValue: 4.5,
          ratingType: 'self',
        },
      },
      offer: {
        promotion: {
          title: 'Exclusive Deal',
          type: 'MEMBER',
        },
        name: 'Deluxe Balcony Room',
        displayPrice: {
          amount: 329.0,
          currency: 'AUD',
        },
        savings: {
          amount: 30.0,
          currency: 'AUD',
        },
        cancellationOption: {
          cancellationType: 'NOT_REFUNDABLE',
        },
      },
    };
  });

  test('should render component hotel-item', async () => {
    render(<HotelItem hotel={sampleHotel} />);

    expect(await screen.findByTestId('hotel-item:title')).toHaveTextContent('Courtyard by Marriott Sydney-North Ryde');
    expect(await screen.findByTestId('hotel-item:price')).toHaveTextContent('$329');
    expect(await screen.findByTestId('hotel-item:savings')).toHaveTextContent('Save $30');
    expect(await screen.findByTestId('hotel-item:offer')).toBeVisible();
  });
});
