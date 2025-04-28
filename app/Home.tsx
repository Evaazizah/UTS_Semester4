import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [drugs, setDrugs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Contoh API
      .then((res) => res.json())
      .then((json) => {
        setDrugs(json);
        setLoading(false);
        console.log('Data Obat:', json);  // Menampilkan data di console
      })
      .catch((err) => {
        setError('Terjadi kesalahan saat mengambil data');
        setLoading(false);
        console.error('Error fetching drugs:', err);  // Menampilkan error di console
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat datang di Apotek Digital 🩺</Text>
      <Text style={styles.subtitle}>Temukan dan pesan obat dengan mudah</Text>

      <FlatList
        data={drugs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.title || 'Nama Obat Tidak Tersedia'}</Text>
            <Text>Harga: Rp {item.price}</Text>
            <Button
              title="Pesan"
              onPress={() => router.push('/order')}
            />
          </View>
        )}
      />

      {/* Tombol ke Halaman Konsultasi */}
      <TouchableOpacity onPress={() => router.push('/konsultasi')}>
        <Text style={styles.konsultasi}>🔎 Ingin Konsultasi? Klik di sini</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF', // Mengubah warna latar belakang utama menjadi putih
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Menambahkan warna teks untuk kontras yang lebih baik
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666', // Warna subtitle yang lebih lembut
  },
  card: {
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F0F8FF', // Mengubah warna kartu menjadi putih
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  konsultasi: {
    color: '#007bff',
    marginTop: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
