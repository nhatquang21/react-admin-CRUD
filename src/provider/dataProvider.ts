import { stringify } from 'query-string';
import { BASE_URL } from '../constants';
import { storage } from './index';
import _ from 'lodash';
import fetchJson from './fetch';

const getOptions = () => {
  let options = {};
  const user = storage.load('auth');
  const token = _.get(user, 'token');
  if (token) {
    _.set(options, 'user.authenticated', true);
    _.set(options, 'user.token', token);
  }
  return options;
};

type Filter = {
  where?: string;
  limit?: number;
  offset?: number;
  order?: any;
  include?: any;
};

const normalizeFilter = (filter: any): Filter => {
  let { pagination, where = {}, filter: cFilter, sort, include } = filter;
  const { page, perPage } = pagination;
  let paramSorts: string[] = [];
  if (!_.isArray(sort)) {
    sort = [sort];
  }

  if (sort) {
    for (let i = 0; i < sort.length; i++) {
      const paramSort = sort[i] || {};
      const { order, field } = paramSort;
      if (order && field) {
        const strOrder = field + ' ' + order;
        paramSorts.push(strOrder);
      }
    }
  }

  let order;
  const limit = perPage;
  const offset = (page - 1) * perPage;
  const { where: whereCFilter, ...restCFilter } = cFilter;
  if (cFilter && whereCFilter) {
    where = { ...where, ...whereCFilter };
  }
  if (paramSorts.length > 0) {
    order = paramSorts;
  }
  return { limit, order, offset, where, ...restCFilter };
};

const dataProvider = {
  getList: async (resource: string, params: any) => {
    const { meta = {}, ...filter } = params;

    const { query: metaQuery } = meta;

    const apiUrl = `${BASE_URL}`;
    let fl = normalizeFilter(filter);

    const options = getOptions();

    const query = {
      ...metaQuery,
      filter: JSON.stringify(fl),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const res = await fetchJson(url, options);

    if (res && res.json) {
      return { data: res.json, total: res.json.length };
    }
    return { data: [], total: 0 };
  },

  getOne: async (resource: string, params: any) => {
    const { meta = {}, id } = params;
    // console.log(params);
    if (!id) {
      return { data: { id: 0 } };
    }
    const { filter } = meta;

    let query = {};
    if (filter) {
      query = {
        ...query,
        filter: JSON.stringify(meta.filter),
      };
    }
    const apiUrl = `${BASE_URL}`;
    const options = getOptions();
    let url = `${apiUrl}/${resource}/${id}`;
    if (!_.isEmpty(query)) {
      url = `${url}?${stringify(query)}`;
    }
    const res = await fetchJson(url, options);
    const { json: data } = res;
    return { data };
  },

  getMany: async (resource: string, params: any) => {
    const apiUrl = `${BASE_URL}`;

    const options = getOptions();
    const query = {
      filter: JSON.stringify({ where: { ids: params.ids } }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const res = await fetchJson(url, options);

    if (res && res.json) {
      return { data: res.json, total: res.json.length };
    }
    return { data: [], total: 0 };
  },

  getManyReference: async (resource: string, params: any) => {
    const { id, target } = params;

    const apiUrl = `${BASE_URL}`;
    let fl = normalizeFilter(params);
    const options = getOptions();
    const query = {
      filter: JSON.stringify({
        ...fl,
        [target]: id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const res = await fetchJson(url, options);

    const { json = {} } = res;
    const { data, count: total } = json;
    return { data, total };
  },
  create: async (resource: string, params: any) => {
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    options = {
      ...options,
      method: 'POST',
      body: JSON.stringify(params.data),
    };
    const res = await fetchJson(url, options);
    let { json: data } = res;
    return { data };
  },
  update: async (resource: string, params: any) => {
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}/${params.id}`;
    console.log(params);
    let options = getOptions();
    options = {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(params.data),
    };

    const res = await fetchJson(url, options);
    console.log(res);
    let { json: data } = res;
    return { data };
  },
  updateMany: (resource: string, params: any) => {
    // TODO
  },
  delete: async (resource: string, params: any) => {
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}/${params.id}`;
    let options = getOptions();
    options = {
      ...options,
      method: 'DELETE',
    };
    const res = await fetchJson(url, options);
    let { json: data } = res;
    console.log(res);
    return { data };
  },
  deleteMany: (resource: string, params: any) => {
    // TODO
  },
  remote: async (resource: string, params: any, method: string) => {
    console.log('remote');
    const { meta = {} } = params;
    const { filter, query: metaQuery = {} } = meta;

    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    if (method === 'GET') {
      const query = {
        ...metaQuery,
        filter: JSON.stringify(filter),
      };
      url = `${apiUrl}/${resource}?${stringify(query)}`;
      options = {
        ...options,
        method,
      };
    } else {
      options = {
        ...options,
        method,
        body: JSON.stringify(params.data),
      };
    }
    console.log(options);
    const res = await fetchJson(url, options);
    console.log(res);
    let { json: data } = res;
    return { data };
  },
};

export { dataProvider };
