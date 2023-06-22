import React from 'react'
import './ConfirmationPage.scss'
import { useAppSelector } from '../../redux/hooks'
import { Link } from 'react-router-dom'

type Props = {}

const ConfirmationPage = (props: Props) => {
    const cellTypeState = useAppSelector((state) => state.cellTypeState)
    const selectedCellState = useAppSelector((state) => state.activeCellState)

    const arrOfCells = Object.entries(selectedCellState)
    const sizeOfSelectedCell = arrOfCells.filter(
        (element) => element[1] === true
    )

    const currentCell =
        sizeOfSelectedCell[0][0] === 'xxs'
            ? cellTypeState.filter(
                  (element) =>
                      element.params?.height === 110 &&
                      element.params?.width === 200
              )
            : sizeOfSelectedCell[0][0] === 'xs'
            ? cellTypeState.filter(
                  (element) =>
                      element.params?.height === 160 &&
                      element.params?.width === 200
              )
            : sizeOfSelectedCell[0][0] === 's'
            ? cellTypeState.filter(
                  (element) =>
                      element.params?.height === 110 &&
                      element.params?.width === 380
              )
            : sizeOfSelectedCell[0][0] === 'm'
            ? cellTypeState.filter(
                  (element) =>
                      element.params?.height === 209 &&
                      element.params?.width === 200
              )
            : sizeOfSelectedCell[0][0] === 'l'
            ? cellTypeState.filter(
                  (element) =>
                      element.params?.height === 160 &&
                      element.params?.width === 380
              )
            : sizeOfSelectedCell[0][0] === 'xl'
            ? cellTypeState.filter(
                  (element) =>
                      element.params?.height === 209 &&
                      element.params?.width === 380
              )
            : sizeOfSelectedCell[0][0] === 'xxl'
            ? cellTypeState.filter(
                  (element) =>
                      element.params?.height === 210 &&
                      element.params?.width === 645
              )
            : sizeOfSelectedCell[0][0] === 'xxxl'
            ? cellTypeState.filter(
                  (element) =>
                      element.params?.height === 365 &&
                      element.params?.width === 645
              )
            : [
                  {
                      has_empty: true,
                  },
              ]

    return (
        <div className="confirmation-page">
            <div className="container">
                <p className="confirmation-page-title">
                    Ви обрали наступний розмір посилки:
                </p>
                <div className="row confirmation-current-cell">
                    <img
                        className="confirmation-item-img"
                        src={`images/${sizeOfSelectedCell[0][0]}-cell-img.svg`}
                        alt=""
                    />
                    <div>
                        <p className="confirmation-cell-item-size-1">
                            {sizeOfSelectedCell[0][0]}
                        </p>
                        <p className="confirmation-cell-item-size-2">
                            {currentCell[0].params?.width !== undefined
                                ? Math.round(currentCell[0].params?.width / 10)
                                : undefined}
                            x
                            {currentCell[0].params?.height !== undefined
                                ? Math.round(currentCell[0].params?.height / 10)
                                : undefined}{' '}
                            см
                        </p>
                    </div>
                </div>
                <p className="confirmation-page-subtitle">
                    Дякуємо що скористались нашими послугами!
                </p>
                <Link to={'/'}>
                    <button className="confirmation-btn">
                        повернутись на головну
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ConfirmationPage
