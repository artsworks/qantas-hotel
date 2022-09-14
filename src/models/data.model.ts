export interface HotelDto {
  results: Hotel[];
}

export interface Hotel {
  id: string;
  property: Property;
  offer: Offer;
}

export interface Offer {
  promotion: Promotion;
  name: string;
  displayPrice: DisplayPrice;
  savings: DisplayPrice | null;
  cancellationOption: CancellationOption;
}

export interface CancellationOption {
  cancellationType: string;
}

export interface DisplayPrice {
  amount: number;
  currency: string;
}

export interface Promotion {
  title: string;
  type: string;
}

export interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
}

export interface PreviewImage {
  url: string;
  caption: string;
  imageType: string;
}

export interface Rating {
  ratingValue: number;
  ratingType: string;
}
