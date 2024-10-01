import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CategoryLimitForm = () => {
  const { dispatch } = useContext(AppContext);
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_CATEGORY_LIMIT',
      payload: { category, limit: parseFloat(limit) },
    });
    setCategory('');
    setLimit('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-sm col-lg-4'>
          <label htmlFor='category'>Category</label>
          <input
            required
            type='text'
            className='form-control'
            id='category'
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className='col-sm col-lg-4'>
          <label htmlFor='limit'>Limit</label>
          <input
            required
            type='number'
            className='form-control'
            id='limit'
            value={limit}
            onChange={(event) => setLimit(event.target.value)}
          />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary'>
            Set Limit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CategoryLimitForm;