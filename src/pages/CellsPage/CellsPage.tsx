import { useEffect } from 'react'
import './CellsPage.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCellData } from '../../redux/cellTypesReducer'
import {
    selectLCell,
    selectMCell,
    selectSCell,
    selectXlCell,
    selectXsCell,
    selectXxlCell,
    selectXxsCell,
    selectXxxlCell,
} from '../../redux/activeCellReducer'

type Props = {}

const CellsPage = (props: Props) => {
    const cellTypeState = useAppSelector((state) => state.cellTypeState)
    const selectedCellState = useAppSelector((state) => state.activeCellState)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetch(
            'https://dev.hub.omnic.solutions//api/2.0.0/public/orders/device/34670a76-6022-4df5-ac1d-68f88589c904/cells/statuses/?type=5'
        )
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dispatch(getCellData(data.data.cell_types))
            })
    }, [dispatch])

    return (
        <div className="cells-page">
            <div className="container">
                <p className="cells-page-title">Оберіть розмір посилки</p>
                <div className="row cells-wrapper">
                    <div className="small-cells-wrapper">
                        <div
                            onClick={
                                cellTypeState[0].has_empty
                                    ? () => dispatch(selectXxsCell())
                                    : undefined
                            }
                            className={`cell-item xxs-cell row is-empty-${cellTypeState[0].has_empty} is-active-${selectedCellState.xxs}`}
                        >
                            <img
                                className="cell-item-img"
                                src="images/xxs-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XXS</p>
                                <p className="cell-item-size-2">20x11 см</p>
                            </div>
                        </div>
                        <div
                            onClick={
                                cellTypeState[2].has_empty
                                    ? () => dispatch(selectMCell())
                                    : undefined
                            }
                            className={`cell-item m-cell row is-empty-${cellTypeState[2].has_empty} is-active-${selectedCellState.m}`}
                        >
                            <img
                                className="cell-item-img"
                                src="images/m-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">M</p>
                                <p className="cell-item-size-2">20x21 см</p>
                            </div>
                        </div>
                        <div
                            onClick={
                                cellTypeState[1].has_empty
                                    ? () => dispatch(selectXsCell())
                                    : undefined
                            }
                            className={`cell-item xs-cell row is-empty-${cellTypeState[1].has_empty} is-active-${selectedCellState.xs}`}
                        >
                            <img
                                className="cell-item-img"
                                src="images/xs-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XS</p>
                                <p className="cell-item-size-2">20x16 см</p>
                            </div>
                        </div>
                        <div
                            onClick={
                                cellTypeState[4].has_empty
                                    ? () => dispatch(selectLCell())
                                    : undefined
                            }
                            className={`cell-item l-cell row is-empty-${cellTypeState[4].has_empty} is-active-${selectedCellState.l}`}
                        >
                            <img
                                className="cell-item-img"
                                src="images/l-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">L</p>
                                <p className="cell-item-size-2">38x16 см</p>
                            </div>
                        </div>
                        <div
                            onClick={
                                cellTypeState[3].has_empty
                                    ? () => dispatch(selectSCell())
                                    : undefined
                            }
                            className={`cell-item s-cell row is-empty-${cellTypeState[3].has_empty} is-active-${selectedCellState.s}`}
                        >
                            <img
                                className="cell-item-img"
                                src="images/s-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">S</p>
                                <p className="cell-item-size-2">38x11 см</p>
                            </div>
                        </div>
                        <div
                            onClick={
                                cellTypeState[5].has_empty
                                    ? () => dispatch(selectXlCell())
                                    : undefined
                            }
                            className={`cell-item xl-cell row is-empty-${cellTypeState[5].has_empty} is-active-${selectedCellState.xl}`}
                        >
                            <img
                                className="cell-item-img"
                                src="images/xl-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XL</p>
                                <p className="cell-item-size-2">38x21 см</p>
                            </div>
                        </div>
                    </div>
                    <div className="big-cells-wrapper">
                        <div
                            onClick={
                                cellTypeState[7].has_empty
                                    ? () => dispatch(selectXxlCell())
                                    : undefined
                            }
                            className={`cell-item xxl-cell row is-empty-${cellTypeState[7].has_empty} is-active-${selectedCellState.xxl}`}
                        >
                            <img
                                className="cell-item-img"
                                src="images/xxl-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XXL</p>
                                <p className="cell-item-size-2">64x21 см</p>
                            </div>
                        </div>
                        <div
                            onClick={
                                cellTypeState[8].has_empty
                                    ? () => dispatch(selectXxxlCell())
                                    : undefined
                            }
                            className={`cell-item xxxl-cell row is-empty-${cellTypeState[8].has_empty} is-active-${selectedCellState.xxxl}`}
                        >
                            <img
                                className="cell-item-img"
                                src="images/xxxl-cell-img.svg"
                                alt=""
                            />
                            <div>
                                <p className="cell-item-size-1">XXXL</p>
                                <p className="cell-item-size-2">64x36 см</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cells-btns-wrapper">
                    <Link to={'/package'}>
                        <button className="cells-not-confirm-btn">НАЗАД</button>
                    </Link>
                    <button
                        className={`cells-confirm-btn is-disabled-${selectedCellState.isBtnDisabled}`}
                        disabled={selectedCellState.isBtnDisabled}
                    >
                        ПІДТВЕРДИТИ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CellsPage
