let initialState = {
    text: `
    Toyota strives to be a strong corporate citizen, engaging with and earning the trust of its stakeholders, and to contribute to the creation of a prosperous society through all its business operations.
    Our corporate principles form the basis of our initiatives, reflect values that enable action, and drive our mindset.
    `
}

const aboutReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default aboutReducer;