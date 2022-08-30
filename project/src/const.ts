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

export const MAX_RATING = 10;

export const PAGE_LIMIT = 8;

export enum ApiRoute {
  Films = '/films',
  Film = '/films/:id',
  Login = '/login',
  Logout = '/logout'
}
