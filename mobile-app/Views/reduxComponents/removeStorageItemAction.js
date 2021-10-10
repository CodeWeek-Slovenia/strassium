export const removeStorageItem = item => (
    {
      type: 'STORAGE_REMOVE',
      payload: item,
    }
  );