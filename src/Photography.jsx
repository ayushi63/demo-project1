import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction, getCommercialAction, getPortfolioAction } from "./Redux/Actions/PhotographyAction"

export default function Photography() {
  const { data:category } = useQuery("category",async () => get ("https://api.gulmahorphotography.com/api/category",headers));
  const { data:portfolio } = useQuery("portfolio",async () => get ("https://api.gulmahorphotography.com/api/portfolio",headers));
  // const [category, setCategory] = useState('All')
  // const [portfolio, setPortfolio] = useState([])
  // const [commercial, setCommercial] = useState([])
  // const dispatch = useDispatch()

  const CategoryList = useSelector((state) => state.photography?.Category)
  const PortfolioList = useSelector((state) => state.photography?.Portfolio)
  //   const CommercialList = useSelector((state) => state.photography.Commercial)

  useEffect(() => {
    dispatch(getCategoryAction())
    dispatch(getPortfolioAction())
  }, [])

  useEffect(() => {
    if (category === 'All') {
      const portfolioData = PortfolioList.filter(
        (ele) => ele.category.mainCategory === 'life-events',
      )
      setPortfolio(portfolioData)
    } else {
      const portfolioData = PortfolioList.filter(
        (ele) =>
          ele.category.name === category &&
          ele.category.mainCategory === 'life-events',
      )
      setPortfolio(portfolioData)
    }
  }, [PortfolioList, category]);

  useEffect(() => {
    if (category === 'All') {
      const CommercialData = PortfolioList.filter(
        (ele) => ele.category.mainCategory === 'commercials',
      )
      setCommercial(CommercialData)
    } else {

      const commercialData = PortfolioList.filter(
        (ele) =>
          ele.category.name === category &&
          ele.category.mainCategory === 'commercials',
      )
      setCommercial(commercialData)
    }
  }, [PortfolioList, category]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 className="Portfolio">Portfolio</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <span
          onClick={() => setCategory('All')}
          style={{
            padding: '10px 20px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            border: '2px solid orange',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
        >
          ALl
        </span>
        {CategoryList.map(
          (category, idx) =>
            category.mainCategory === 'life-events' && (
              <span
                onClick={() => setCategory(category.name)}
                style={{
                  padding: '10px 20px',
                  textAlign: 'center',
                  border: '2px solid orange',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                {category.name}{' '}
              </span>
            ),
        )}
      </div>

      <div className="portfolio-container">
        {portfolio.map((ele, i) => (
          <div className="portfolio-item">
            <img width="100%" height="100%" src={ele.source} alt="" />
          </div>
        ))}
      </div>

      <h1 style={{ marginTop: '100px' }}>Commercial</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <span
          onClick={() => setCategory('All')}
          style={{
            padding: '10px 20px',
            textAlign: 'center',
            border: '2px solid orange',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
        >
          ALl
        </span>
        {CategoryList.map(
          (category, idx) =>
            category.mainCategory === 'commercials' && (
              <span
                onClick={() => setCategory(category.name)}
                style={{
                  padding: '10px 20px',
                  border: '2px solid orange',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                {category.name}
              </span>
            ),
        )}
      </div>
      <div className="portfolio-container">
        {commercial.map((ele, i) => (
          <div className="portfolio-item">
            <img width="100%" height="100%" src={ele.source} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

// <h1>Commercial</h1>
//     {CategoryList.map(
//       (caregory, idx) =>
//       category.mainCategory === 'life-events' && (
//         <span>{category.name} </span>
//     ))},