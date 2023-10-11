import { render, screen, act } from '@testing-library/react'
import RepositoriesListItem from './RepositoriesListItem'
import { MemoryRouter } from 'react-router-dom'

// jest.mock('../tree/FileIcon', () => {
//   return () => {
//     return 'File Icon Component'
//   }
// })

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

test('shows a link to the github homepage for this repository', async () => {
  renderComponent()

  await screen.findByRole('img', {
    name: 'Javascript'
  })

  // await act(async () => {
  //   await pause()
  // })
})

const pause = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}