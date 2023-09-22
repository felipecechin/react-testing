import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'John Doe', email: 'john@example' },
    {
      name: 'Jane Doe',
      email: 'jane@example',
    }
  ]

  render(<UserList users={users} />)

  return {
    users
  }
}

test('render one row per user', () => {
  renderComponent();

  // screen.logTestingPlaygroundURL();
  // const rows = screen.getAllByRole('row');
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  // const rows = container.querySelectorAll('tbody tr');


  expect(rows).toHaveLength(2);
})

test('render the name and email of each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', {
      name: user.name
    })
    const email = screen.getByRole('cell', {
      name: user.email
    })

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }

})