/**
 *
 * Tests for Header
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

// import 'jest-dom/extend-expect'; // add some helpful assertions
// import React from 'react';
// import { render } from '@testing-library/react';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';

// import configureStore from '../../../store/configureStore';
import { getMoviesStart, setCurrentPageParam, setSortParam, setLanguageParam } from '../actions';
import { mapDispatchToProps } from '../index.js';

describe('mapDispatchToProps', () => {
  describe('getMoviesStart', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.getMoviesStart).toBeDefined();
    });

    it('should dispatch getMoviesStart when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.getMoviesStart();
      expect(dispatch).toHaveBeenCalledWith(getMoviesStart());
    });
  });

  describe('setCurrentPageParam', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.setCurrentPage).toBeDefined();
    });

    it('should dispatch setCurrentPageParam when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const page = 1;
      result.setCurrentPage(page);
      expect(dispatch).toHaveBeenCalledWith(setCurrentPageParam(page));
    });
  });

  describe('setSortParam', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.setSort).toBeDefined();
    });

    it('should dispatch setSortParam when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const sort = 'popularity.desc';
      result.setSort(sort);
      expect(dispatch).toHaveBeenCalledWith(setSortParam(sort));
    });
  });

  describe('setLanguageParam', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.setLanguage).toBeDefined();
    });

    it('should dispatch setLanguageParam when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const language = 'en';
      result.setLanguage(language);
      expect(dispatch).toHaveBeenCalledWith(setLanguageParam(language));
    });
  });
});
