import { Grid, Item, Label, Rating, Statistic } from 'semantic-ui-react';
import { Hotel } from '../../models';

interface HotelItemProps {
  hotel: Hotel;
}

export const HotelItem = ({ hotel }: HotelItemProps) => (
  <Item
    className="hotel-item__container"
    tabIndex={0}
    aria-label={`${hotel.property.title} $${hotel.offer.displayPrice.amount}`}
  >
    <Item.Image
      size="medium"
      className="hotel-item__image"
      src={hotel.property.previewImage.url}
      alt={hotel.property.previewImage.caption}
      label={{
        color: 'red',
        content: hotel.offer.promotion.title,
        ribbon: true,
      }}
    />

    <Item.Content verticalAlign={'middle'}>
      <Item.Header className="hotel-item__content-title" data-testid="hotel-item:title">
        {hotel.property.title}
        <Rating
          icon={hotel.property.rating.ratingType === 'self' ? 'heart' : 'star'}
          defaultRating={hotel.property.rating.ratingValue}
          maxRating={5}
          disabled
        />
      </Item.Header>
      <Item.Meta>
        <span className="hotel-item__content-address" data-testid="hotel-item:address">
          {hotel.property.address}
        </span>
      </Item.Meta>
      <Item.Description>
        <Grid>
          <Grid.Column width={10}>
            <a className="hotel-item__content-offer" data-testid="hotel-item:offer" href="#">
              {hotel.offer.name}
            </a>
            <p className="hotel-item__content-description">
              A feugiat parturient mi etiam dui libero ullamcorper nisl curabitur consectetur massa ipsum ullamcorper
              proin odio nam ipsum in.Et dui mus dui in sociosqu.
            </p>
          </Grid.Column>
          <Grid.Column width={6} textAlign={'right'}>
            <Statistic>
              <Statistic.Label>1 night total ({hotel.offer.displayPrice.currency})</Statistic.Label>
              <Statistic.Value className="hotel-item__content-price" data-testid="hotel-item:price">
                ${hotel.offer.displayPrice.amount}
              </Statistic.Value>
              {hotel.offer.savings ? (
                <Statistic.Label>
                  <p className="hotel-item__content-savings" data-testid="hotel-item:savings">
                    Save ${hotel.offer.savings?.amount}
                  </p>
                </Statistic.Label>
              ) : (
                <></>
              )}
            </Statistic>
          </Grid.Column>
        </Grid>
      </Item.Description>
      {hotel.offer.savings ? (
        <Item.Extra>
          <Label icon={'dollar'} color={'green'} content="Great Value" />
        </Item.Extra>
      ) : (
        <></>
      )}
    </Item.Content>
  </Item>
);
