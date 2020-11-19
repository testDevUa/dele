// { id: 1, fullName: 'Dmytro Pryshliak', followed: false, car: 'Mazda 3', location: { country: 'Ukraine', city: 'Kyiv' } },
//         { id: 2, fullName: 'Volodymyr Pryshliak', followed: false, car: 'Daewoo Lanos', location: { country: 'Ukraine', city: 'Bilohorodka' } },
//         { id: 3, fullName: 'Anastasiya Madyar', followed: false, car: 'Mazda 3', location: { country: 'Ukraine', city: 'Kyiv' } }

let initialState = {
    users: [],
    usersOnPage: 10,
    pageNumber: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE-FOLLOW': {
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.id) {
                        return { ...elem, followed: !elem.followed }
                    }
                    return elem;
                })
            }
        }

        case 'SET_USERS' : {
            return {...state, users: [...action.users]}
        }

        case 'SET_TOTAL_USERS' : {
            return {...state, totalCountUsers: action.count, pagesCount: Math.ceil(action.count / state.usersOnPage)}
        }

        case 'SET_PAGE' : {
            return {...state, pageNumber: action.page}
        }

        default: return state;
    }
}

export const toggleFolllowAC = (id) => ({ type: 'TOGGLE-FOLLOW', id })
export const setUsersAC = (users) => ({ type: 'SET_USERS', users })

export const setTotalUsersAC = (count) => ({type: 'SET_TOTAL_USERS', count});
export const setPageAC = (page) => ({type: 'SET_PAGE', page});

export default usersReducer;