import httpClient from '../http-client';

export function searchByName(name, page) {
  const params = {
    query: name,
    include_adult: true,
    page,
    language: 'pt-BR',
  };

  return httpClient()
    .get('search/multi', { params })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function trendingMovies() {
  const params = {
    language: 'pt-BR',
  };

  return httpClient()
    .get('trending/all/day', { params })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function upcomingMovies() {
  const params = {
    language: 'pt-BR',
    region: 'BR',
  };

  return httpClient()
    .get('movie/upcoming', { params })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function getByID(id) {
  if (!id) {
    return;
  } else {
    const params = {
      language: 'pt-BR',
      region: 'BR',
    };

    return httpClient()
      .get(`movie/${id}`, { params })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
}
