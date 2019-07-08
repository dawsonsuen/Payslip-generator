const AppConstants = {
    ApiBase: process.env.API_URL + process.env.API_BASE,
    APP_VER: process.env.VERSION,
    APP_COPYRIGHT_YEAR: new Date().getFullYear()
};

export default AppConstants;
