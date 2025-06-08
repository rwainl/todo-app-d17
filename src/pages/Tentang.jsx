import React from 'react'
import { Link } from 'react-router-dom'

const Tentang = () => {
  return (
    <>
        <div className="max-w-2xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Tentang Aplikasi</h1>
      <p className="mb-4">
        Aplikasi To Do List ini dibuat untuk membantu kamu mengelola tugas harian dengan lebih mudah.
        Kamu bisa menambahkan, mengedit, menyelesaikan, dan menghapus to-do secara fleksibel.
      </p>
      <p className="mb-4">
        Fitur-fitur utama:
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>Tambah dan hapus to-do</li>
          <li>Edit to-do yang sudah ada</li>
          <li>Tandai sebagai selesai/belum selesai</li>
          <li>Filter berdasarkan status</li>
          <li>Simpan data secara lokal (localStorage)</li>
          <li>Mode terang/gelap (Dark Mode)</li>
          <li>Notifikasi toast</li>
          <li>Halaman pengaturan profil dan tema</li>
        </ul>
      </p>
      <p>
        Dibuat menggunakan React, Tailwind CSS, dan Formik.
      </p>
    </div>
    </>
  )
}

export default Tentang