import React, { useMemo, useState } from 'react';
import { Dropdown, Item, Rating } from 'semantic-ui-react';

import data, {
  defaultDropdownOption,
  defaultSorting,
  Hotel,
  SortDirection,
  SortOptions,
  Sorts,
} from './models';

import qantasLogo from './assets/qantas-logo.png';

import './App.scss';

function App() {
  const [sort, setSort] = useState<Sorts>(defaultSorting);
  const hotels: Hotel[] = useMemo(() => {
    if (sort.price === SortDirection.ASC) {
      return data.results.sort((a, b) => {
        const priceA = a.offer.displayPrice.amount;
        const priceB = b.offer.displayPrice.amount;

        return priceA < priceB ? -1 : priceA > priceB ? 1 : 0;
      });
    } else if (sort.price === SortDirection.DES) {
      return data.results.sort((a, b) => {
        const priceA = a.offer.displayPrice.amount;
        const priceB = b.offer.displayPrice.amount;

        return priceA < priceB ? 1 : priceA > priceB ? -1 : 0;
      });
    } else {
      return data.results;
    }
  }, [sort]);

  const HotelItem = (hotel: Hotel) => (
    <Item key={hotel.id} className="page-app__hotels-item">
      <Item.Image
        size="small"
        className="page-app__hotels-item-image"
        src={hotel.property.previewImage.url}
        alt={hotel.property.previewImage.caption}
        label={{
          color: 'red',
          content: hotel.offer.promotion.title,
          ribbon: true,
        }}
      />

      <Item.Content>
        <Item.Header className="page-app__hotels-item-title">
          {hotel.property.title}
          <Rating
            icon={
              hotel.property.rating.ratingType === 'self' ? 'heart' : 'star'
            }
            defaultRating={hotel.property.rating.ratingValue}
            maxRating={5}
          />
        </Item.Header>
        <Item.Meta>
          <span className="page-app__hotels-address">
            {hotel.property.address}
          </span>
        </Item.Meta>
        <Item.Description>
          <a className="page-app__hotels-offer" href="#">
            {hotel.offer.name}
          </a>
          <p className="page-app__hotels-stay">
            1 night total ({hotel.offer.displayPrice.currency})
          </p>
          <p className="page-app__hotels-price">
            ${hotel.offer.displayPrice.amount}
          </p>
          {hotel.offer.savings ? (
            <p className="page-app__hotels-savings">
              Save ${hotel.offer.savings?.amount}
            </p>
          ) : (
            <></>
          )}
        </Item.Description>
      </Item.Content>
    </Item>
  );

  function handleSortChange(
    e: React.SyntheticEvent<HTMLElement, Event>,
    { value }: { value: SortOptions },
  ) {
    e.preventDefault();

    switch (value) {
      case SortOptions.PRICE_ASC:
        setSort({
          ...defaultSorting,
          ...{ price: SortDirection.ASC },
        });
        break;
      case SortOptions.PRICE_DES:
        setSort({
          ...defaultSorting,
          ...{ price: SortDirection.DES },
        });
        break;

      default:
        break;
    }
  }

  return (
    <div className="page-app">
      <div className="page-app__header">
        <img src={qantasLogo} className="logo qantas" alt="Qantas logo" />
      </div>
      <div className="page-app__content">
        <div className="page-app__content-action">
          <p>
            <strong>{hotels.length}</strong> hotels in <strong>Sydney</strong>.
          </p>
          <Dropdown
            inline
            placeholder="Sort by"
            options={defaultDropdownOption}
            defaultValue={defaultDropdownOption[0].value}
            onChange={handleSortChange}
          />
        </div>
        <Item.Group className="page-app__hotels" divided>
          {hotels.map((hotel) => HotelItem(hotel))}
        </Item.Group>
      </div>
    </div>
  );
}

export default App;
