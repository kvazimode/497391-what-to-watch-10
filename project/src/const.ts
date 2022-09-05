export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not-found',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const PAGE_LIMIT = 8;
export const MAX_GENRES = 10;

export enum ApiRoute {
  Films = '/films',
  Film = '/films/:id',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Favorite = '/favorite',
}

export const FilmTabs = ['Overview', 'Details', 'Reviews'];

export const FormLimits = {
  MIN_TEXT_LENGTH: 50,
  MAX_TEXT_LENGTH: 400,
  MAX_RATING: 10,
};

export enum errorCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  Timeout = 504,
}

export const errorsToShow = [errorCode.BadRequest, errorCode.Forbidden, errorCode.Timeout];
