import Page from '../../../types/page'
import { Link } from './PagesLinks'

export interface ClientInterface {
  get(link: Link): Promise<Page>
  supports(link: Link): boolean
}
