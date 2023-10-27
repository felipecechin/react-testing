import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

// createServer -> GET '/api/user' -> { user: null}

describe('when user is not signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        return { user: null }
      }
    }
  ])

  test('when user is not signed in, sign in and sign up are visible', async () => {

  })

  test('when user is not signed in, signout is not visible', async () => {

  })
})


describe('when user is signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        return { user: { id: 3, email: 'asd@asd.com' } }
      }
    }
  ])

  test('when user is signed in, sign in and sign up are not visible', async () => {

  })

  test('when user is signed in, sign out is visible', async () => {

  })
});