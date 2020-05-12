export const addCount = () => {
  return {
    type: 'INCREMENT'
  }
}

export const buildPackingList = (packingList) => {
    return {
        type: 'BUILD_PACKING_LIST',
        packingList: packingList,

    }
}