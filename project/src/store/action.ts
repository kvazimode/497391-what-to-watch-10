import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<{genre: string}>('list/changeGenre');
export const showAll = createAction('list/showAll');
