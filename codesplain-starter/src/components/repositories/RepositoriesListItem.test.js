import { render } from '@testing-library/react'
import RepositoriesListItem from './RepositoriesListItem'
import { MemoryRouter } from 'react-router-dom'

function renderComponent() {
  const repository = {
    full_name: 'test/test',
    language: 'Javascript',
    description: 'test description',
    owner: 'test user',
    name: 'test',
    html_url: 'https://github.com/facebook/react'
  }

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  )
}

test('shows a link to the github homepage for this repository', () => {
  renderComponent()
})