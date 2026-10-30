import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ProductVisual from './ProductVisual'
import Reveal from './Reveal'
import { categoryPath } from '../data/categories'
import { getProductImages } from '../data/images'

export default function CategoryCard({ category, index = 0 }) {
  const cover = getProductImages(category.slug)[0]
  return (
    <Reveal as="article" className="cat-card" delay={(index % 4) * 70}>
      <Link to={categoryPath(category)} className="cat-card__link">
        <ProductVisual
          src={cover?.src}
          alt={category.name}
          icon={category.icon}
          variant={index}
          ratio="4 / 5"
        />
        <div className="cat-card__body">
          <span className="cat-card__index">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="cat-card__title">{category.name}</h3>
          <span className="cat-card__more">
            Explore <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
