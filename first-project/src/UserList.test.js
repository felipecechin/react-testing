import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  const users = [
    { name: 'John Doe', email: 'john@example' },
    {
      name: 'Jane Doe',
      email: 'jane@example',
    }
  ]

  render(<UserList users={users} />)


  // screen.logTestingPlaygroundURL();
  // const rows = screen.getAllByRole('row');
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
})

test('render the name and email of each user', () => {

})