import { GET_CATEGORY, GET_COMMERCIAL, GET_PORTFOLIO } from "./common"

export function getPortfolioAction() {
    return {
        type: GET_PORTFOLIO,
    }
}

export function getCommercialAction() {
    return {
        type: GET_COMMERCIAL,
    }
}

export function getCategoryAction() {
    return {
        type: GET_CATEGORY,
    }
}
