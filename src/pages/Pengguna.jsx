import React from "react";

const Pengguna = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Pengguna</h2>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Nama Lengkap</th>
              <th style={styles.th}>Username</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Password</th>
              <th style={styles.th}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Key Alderan</td>
              <td style={styles.td}>Key Alderan</td>
              <td style={styles.td}>keyalderan@gmail.com</td>
              <td style={styles.td}>fufufafa</td>
              <td style={styles.td}>
                <button style={styles.verifyButton}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginLeft: "200px", // Offset untuk sidebar
    padding: "20px",
    backgroundColor: "#fcefe3", // Warna latar belakang lembut
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  tableWrapper: {
    borderTop: "5px solid #a855f7", // Garis ungu di atas tabel
    borderRadius: "10px",
    overflow: "hidden", // Agar border terlihat rapi
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Bayangan tabel
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff", // Warna dasar tabel
  },
  th: {
    backgroundColor: "#f9f9f9", // Warna header tabel
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  verifyButton: {
    backgroundColor: "#ff3b30",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Pengguna;
