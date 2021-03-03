import { articles_url, _api_key, country_code } from '../config/rest_config';

//asycronous function untuk mengambil berita
export async function getArticles(category='general') {

    try {
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });
        //mengambil data json ke result
        let result = await articles.json();
        articles = null;
        //mengembalikan berita dari data json yang ada
        return result.articles;
    }
    catch(error) {
        throw error;
    }
};