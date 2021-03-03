/**
 * Programmer            : Muhamad Rakasiwi Makkah
 * NIM                   : 55201220025
 * Kelas                 : Konversi (Semester 7 - PAGI)
 * Mata Kuliah           : Mobile Programming II
 * Deskripsi Program     : Membuat aplikasi untuk melihat list berita berdasarkan kategori berita dari yang tebaru yang menampilkan gambar, judul berita dan sedikit deskrisi dari berita dan kemudian jika ingin belihat berita secara lengkap maka dapat menekan tombol view
 *
 */

import React, {Component} from 'react';
import TabScreen from './src/screens/TabScreen';

export default class App extends Component {
  render() {
    return (
      <TabScreen/>
    );
  }
};