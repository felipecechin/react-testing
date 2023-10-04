import {
  screen,
  render
} from '@testing-library/react'
import RepositoriesSummary from './RepositoriesSummary'

test('displays information about the repository', () => {
  const repository = {
    language: 'Javascript',
    stargazers_count: 100,
    open_issues: 10,
    forks: 20
  }
  render(<RepositoriesSummary repository={repository} />)

  for (let key in repository) {
    const value = repository[key]
    const element = screen.getByText(new RegExp(`\\b${value}\\b`));

    expect(element).toBeInTheDocument()
  }
})