const asyncTypes: any = {
    PENDING: 'PENDING',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
};

export const createAsyncTypes = (typeString: string) => {
    const newAsyncTypes: any = {};

    Object.values(asyncTypes).reduce((newAsyncTypes: any, asyncValue: any) => {
        newAsyncTypes[asyncValue] = `${typeString}_${asyncValue}`;

        return newAsyncTypes;
    }, newAsyncTypes)

    return newAsyncTypes;
};


const modalTypes = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL',
};

export const createModalTypes = (typeString: string) => {
    const newModalTypes = {};

    Object.values(modalTypes).reduce((newModalTypes: any, modalValue: any) => {
        newModalTypes[modalValue] = `${typeString}_${modalValue}`;

        return newModalTypes;
    }, newModalTypes)

    return newModalTypes;
};
