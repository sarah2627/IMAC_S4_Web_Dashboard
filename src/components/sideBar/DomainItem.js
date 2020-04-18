import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default ({ name, subdomains }) => {
  const newName = name.replace(/\s+/g, '-').toLowerCase() // Change the domain name from something like "Hello World" to "hello-world"
  const idAndFor = `A-${newName}` // A is the letter used on the upper div but IDK why

  const domainPath = '/domain/' + name

  return (
    <li>
      <div class="sub-item">
        <input type="checkbox" id={idAndFor}/>
        <img src="https:zupimages.net/up/20/16/fjl5.png" class="arrow"/>
        <label for={idAndFor}>
          <Link to={domainPath}>
            <a href="#">{name}</a>
          </Link>
        </label>
        <ul>
          {
            subdomains.map(item => {
              const subdomainPath = domainPath + '/' + item.name
              return (
                <Link to={subdomainPath}>
                  <li><a href="#">{item.name}</a></li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    </li>
  )
}
