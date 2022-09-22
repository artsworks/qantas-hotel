import React, { useMemo, useState } from 'react';
import { Dropdown, DropdownProps, Item } from 'semantic-ui-react';

import { sortPriceAscending, sortPriceDescending } from './helpers/sortings';
import HotelItem from './components/hotel-item';

import data, { defaultDropdownOption, defaultSorting, Hotel, SortDirection, SortOptions, Sorts } from './models';

import qantasLogo from './assets/qantas-logo.png';

import './App.scss';

function App() {
  const [sort, setSort] = useState<Sorts>(defaultSorting);
  const hotels: Hotel[] = useMemo(() => {
    if (sort.price === SortDirection.ASC) {
      return data.results.sort(sortPriceAscending);
    } else if (sort.price === SortDirection.DES) {
      return data.results.sort(sortPriceDescending);
    } else {
      return data.results;
    }
  }, [sort]);

  function handleSortChange(e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) {
    e.preventDefault();

    switch (data.value) {
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
          {hotels.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </Item.Group>
      </div>
    </div>
  );
}

export default App;
