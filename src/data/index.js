import axios from 'axios';

const getAllEvents = (search) => {
  const API_URL = `https://opendata.paris.fr/api/datasets/1.0/search/?q=${search}`;

  axios.get(API_URL)
    .then((res) => {
      const resultat = res.data;
      if (resultat.nhits === 0) {
        console.log('no ok');
        document.getElementById('error').innerHTML = `There is nothing for "${search}"`;
      } else {
        console.log('ok');
        return {
          isLoading: true,
          result: [resultat],
        };
      }
      console.log('null');
      return null;
    });
};

exports.getAllEvents = getAllEvents;
