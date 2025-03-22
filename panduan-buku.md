# Belajar TypeScript: Dari Pemula Hingga Mahir
## Daftar Isi

### Bagian 1: Pengenalan dan Dasar TypeScript
1. **Pengenalan TypeScript**
   - Apa itu TypeScript?
   - Sejarah dan Perkembangan TypeScript
   - Mengapa Menggunakan TypeScript?
   - Perbedaan TypeScript vs JavaScript
   - Ekosistem TypeScript

2. **Persiapan Lingkungan Pengembangan**
   - Instalasi Node.js dan TypeScript
   - Setup Editor (VSCode/WebStorm)
   - TypeScript Compiler (tsc)
   - tsconfig.json
   - Debugging TypeScript

3. **Tipe Data Dasar**
   - number
   - string
   - boolean
   - null dan undefined
   - any dan unknown
   - void
   - never
   - Array
   - Tuple
   - Enum

### Bagian 2: TypeScript Fundamental
4. **Variabel dan Deklarasi**
   - var, let, const
   - Type Annotations
   - Type Inference
   - Union Types
   - Literal Types
   - Type Assertions

5. **Functions**
   - Function Declarations
   - Arrow Functions
   - Optional dan Default Parameters
   - Rest Parameters
   - Function Overloading
   - This dalam TypeScript
   - Function Types dan Signatures

6. **Interfaces dan Types**
   - Interface Declaration
   - Optional Properties
   - Readonly Properties
   - Extending Interfaces
   - Type Aliases
   - Intersection Types
   - Index Signatures
   - Implementing Interfaces

7. **Classes dan Objects**
   - Class Declaration
   - Constructor
   - Properties dan Methods
   - Access Modifiers
   - Inheritance
   - Abstract Classes
   - Static Members
   - Method Overriding

### Bagian 3: TypeScript Lanjutan
8. **Generics**
   - Generic Functions
   - Generic Classes
   - Generic Interfaces
   - Generic Constraints
   - Generic Utility Types
   - Mapped Types
   - Conditional Types

9. **Advanced Types**
   - Union dan Intersection Types
   - Type Guards
   - Discriminated Unions
   - Index Types
   - Mapped Types
   - Conditional Types
   - Template Literal Types
   - Utility Types

10. **Modules dan Namespaces**
    - ES Modules
    - CommonJS
    - Module Resolution
    - Namespace
    - Declaration Merging
    - Triple-Slash Directives

11. **Decorators**
    - Class Decorators
    - Method Decorators
    - Property Decorators
    - Parameter Decorators
    - Decorator Factories
    - Metadata Reflection

### Bagian 4: TypeScript dalam Praktik
12. **Pattern dan Best Practices**
    - SOLID Principles
    - Design Patterns dalam TypeScript
    - Error Handling
    - Asynchronous Programming
    - Testing dengan TypeScript
    - Code Organization
    - Performance Optimization

13. **TypeScript dengan Framework Modern**
    - React dengan TypeScript
    - Vue dengan TypeScript
    - Angular (Built with TypeScript)
    - Node.js dengan TypeScript
    - Express dengan TypeScript
    - NestJS

14. **Tools dan Ekosistem**
    - Package Managers (npm/yarn/pnpm)
    - Build Tools
    - Linting (ESLint)
    - Formatting (Prettier)
    - Documentation Tools
    - CI/CD dengan TypeScript

15. **Project Praktis**
    - Todo List Application
    - REST API dengan TypeScript
    - Full Stack Application
    - Real-time Chat Application
    - E-commerce Platform

### Bagian 5: TypeScript untuk Production
16. **Security dan Performance**
    - Security Best Practices
    - Performance Optimization
    - Memory Management
    - Error Tracking
    - Logging
    - Monitoring

17. **Deployment dan Maintenance**
    - Build Process
    - Bundling
    - Deployment Strategies
    - Version Control
    - Documentation
    - Maintenance Best Practices

### Appendix
- Glossary
- TypeScript Cheat Sheet
- Common Errors dan Solusinya
- Resources dan Referensi
- Community dan Kontribusi

## Bab 1: Pengenalan TypeScript

### Apa itu TypeScript?
TypeScript adalah "bahasa pemrograman super" yang dibangun di atas JavaScript. Bayangkan TypeScript seperti JavaScript yang memakai "kacamata pintar" - dia bisa melihat dan mencegah kesalahan sebelum program kita dijalankan!

#### Analogi Sederhana
Misalkan kita sedang membuat kue:
- JavaScript adalah seperti membuat kue tanpa resep - kita bisa berkreasi bebas, tapi berisiko gagal
- TypeScript adalah seperti membuat kue dengan resep yang detail - kita tahu bahan yang tepat, takaran yang pas, dan langkah-langkah yang jelas

### Mengapa Harus Belajar TypeScript?

1. **Pencegahan Kesalahan Lebih Awal**
   - TypeScript membantu kita menemukan bug sebelum program dijalankan
   - Seperti punya asisten yang selalu mengecek pekerjaan kita

2. **Dokumentasi yang Lebih Baik**
   - Kode menjadi lebih mudah dibaca dan dipahami
   - Tim pengembang lain akan lebih mudah memahami kode kita

3. **Dukungan Tools yang Hebat**
   - Editor kode akan memberikan saran pintar
   - Auto-complete yang lebih akurat

### Perbedaan TypeScript vs JavaScript

```typescript
// JavaScript
function tambahAngka(a, b) {
    return a + b;
}

// TypeScript
function tambahAngka(a: number, b: number): number {
    return a + b;
}
```

Dalam contoh di atas:
- JavaScript tidak tahu tipe data parameter
- TypeScript memastikan parameter adalah angka
- TypeScript mencegah kesalahan seperti mengirim string ke fungsi yang membutuhkan angka

### Contoh Kasus Nyata

Mari lihat contoh sederhana yang menunjukkan kekuatan TypeScript:

```typescript
// Mendefinisikan struktur data Pengguna
interface Pengguna {
    nama: string;
    umur: number;
    email: string;
}

// Fungsi untuk menyapa pengguna
function sapaPengguna(pengguna: Pengguna): string {
    return `Halo ${pengguna.nama}! Anda berumur ${pengguna.umur} tahun.`;
}

// Contoh penggunaan yang benar
const user1: Pengguna = {
    nama: "Budi",
    umur: 25,
    email: "budi@email.com"
};

console.log(sapaPengguna(user1)); // Output: Halo Budi! Anda berumur 25 tahun.

// TypeScript akan menunjukkan error untuk kasus berikut:
const userSalah = {
    nama: "Ani",
    umur: "dua puluh" // Error: Type 'string' is not assignable to type 'number'
};
```

### Setup Lingkungan Pengembangan

Untuk memulai dengan TypeScript, kita perlu:

1. Install Node.js
2. Install TypeScript:
   ```bash
   npm install -g typescript
   ```
3. Buat file konfigurasi TypeScript (tsconfig.json)
4. Mulai coding!

### Latihan Praktik

Mari kita coba membuat program sederhana untuk memahami konsep dasar:

```typescript
// Latihan 1: Tipe Data Dasar
let nama: string = "Budi";
let umur: number = 25;
let aktif: boolean = true;

// Latihan 2: Array
let hobi: string[] = ["membaca", "menulis", "coding"];

// Latihan 3: Object dengan Interface
interface Mahasiswa {
    nim: string;
    nama: string;
    ipk: number;
}

const mahasiswa: Mahasiswa = {
    nim: "12345",
    nama: "Budi Santoso",
    ipk: 3.75
};

// Latihan 4: Function dengan Tipe
function hitungLuasLingkaran(radius: number): number {
    return Math.PI * radius * radius;
}
```

### Tips Belajar
1. Mulai dari konsep dasar
2. Praktik setiap contoh kode
3. Buat project kecil untuk latihan
4. Jangan ragu untuk membuat kesalahan - TypeScript akan membantu menemukan kesalahan

### Selanjutnya
Di bab berikutnya, kita akan membahas lebih dalam tentang:
- Tipe data kompleks
- Interface dan Type
- Functions
- Classes dan Objects

Tetap semangat belajar! 🚀

## Bab 2: Tipe Data Dasar

### 1. Number
TypeScript mendukung bilangan bulat, pecahan, dan notasi biner/heksadesimal.

```typescript
// Deklarasi number
let decimal: number = 6;             // bilangan desimal
let hex: number = 0xf00d;           // bilangan heksadesimal
let binary: number = 0b1010;        // bilangan biner
let octal: number = 0o744;          // bilangan oktal
let float: number = 3.14;           // bilangan pecahan

// Contoh operasi matematika
let total: number = decimal + float; // 9.14
let average: number = total / 2;     // 4.57

// Contoh praktis: Menghitung diskon
function hitungDiskon(harga: number, persenDiskon: number): number {
    return harga - (harga * (persenDiskon / 100));
}

console.log(hitungDiskon(100000, 20)); // Output: 80000
```

### 2. String
String adalah tipe data untuk teks. TypeScript mendukung template literals untuk string multiline dan interpolasi.

```typescript
// Deklarasi string
let nama: string = "Budi";
let pesan: string = 'Halo Dunia';

// Template literals (string multiline)
let profilLengkap: string = `
Nama: ${nama}
Usia: 25 tahun
Pekerjaan: Programmer
`;

// Contoh praktis: Format nama
function formatNama(depan: string, belakang: string): string {
    return `${depan.charAt(0).toUpperCase()}${depan.slice(1)} ${belakang.toUpperCase()}`;
}

console.log(formatNama("budi", "santoso")); // Output: "Budi SANTOSO"
```

### 3. Boolean
Boolean hanya memiliki dua nilai: true atau false. Sangat berguna untuk logika kondisional.

```typescript
// Deklarasi boolean
let aktif: boolean = true;
let sudahMenikah: boolean = false;

// Contoh praktis: Validasi form sederhana
interface UserForm {
    username: string;
    password: string;
}

function validasiForm(form: UserForm): boolean {
    const usernameValid = form.username.length >= 3;
    const passwordValid = form.password.length >= 6;
    
    return usernameValid && passwordValid;
}

const form = {
    username: "budi",
    password: "123"
};

console.log(validasiForm(form)); // Output: false
```

### 4. Array
Array adalah kumpulan nilai dengan tipe data yang sama.

```typescript
// Deklarasi array
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apel", "jeruk", "mangga"];

// Array multi dimensi
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Contoh praktis: Menghitung rata-rata nilai
function hitungRataRata(nilai: number[]): number {
    const total = nilai.reduce((sum, num) => sum + num, 0);
    return total / nilai.length;
}

const nilaiSiswa = [85, 90, 78, 88, 95];
console.log(hitungRataRata(nilaiSiswa)); // Output: 87.2
```

### 5. Tuple
Tuple adalah array dengan jumlah dan tipe elemen yang tetap.

```typescript
// Deklarasi tuple
let koordinat: [number, number] = [123.456, -78.90];
let namaLengkap: [string, string, string?] = ["John", "Doe"]; // Elemen ketiga opsional

// Contoh praktis: Representasi RGB Color
type RGB = [number, number, number];

function createColor(r: number, g: number, b: number): RGB {
    return [
        Math.min(255, Math.max(0, r)),
        Math.min(255, Math.max(0, g)),
        Math.min(255, Math.max(0, b))
    ];
}

const merah: RGB = createColor(255, 0, 0);
console.log(merah); // Output: [255, 0, 0]
```

### 6. Enum
Enum memungkinkan kita mendefinisikan sekumpulan konstanta bernama.

```typescript
// Deklarasi enum
enum StatusPesanan {
    MENUNGGU_PEMBAYARAN = "MENUNGGU_PEMBAYARAN",
    DIPROSES = "DIPROSES",
    DIKIRIM = "DIKIRIM",
    SELESAI = "SELESAI"
}

// Contoh praktis: Sistem tracking pesanan
interface Pesanan {
    id: string;
    status: StatusPesanan;
}

function updateStatus(pesanan: Pesanan, statusBaru: StatusPesanan): Pesanan {
    return {
        ...pesanan,
        status: statusBaru
    };
}

let pesananSaya: Pesanan = {
    id: "ORDER-001",
    status: StatusPesanan.MENUNGGU_PEMBAYARAN
};

pesananSaya = updateStatus(pesananSaya, StatusPesanan.DIPROSES);
console.log(pesananSaya.status); // Output: "DIPROSES"
```

### 7. Any dan Unknown
`any` menonaktifkan pengecekan tipe, sedangkan `unknown` adalah versi yang lebih aman dari `any`.

```typescript
// Contoh any (hindari penggunaan jika memungkinkan)
let tidakAman: any = 4;
tidakAman = "bisa string";
tidakAman = false;

// Contoh unknown (lebih aman)
let nilai: unknown = 30;

// Perlu type checking sebelum operasi
if (typeof nilai === "number") {
    console.log(nilai + 10); // OK
}

// Contoh praktis: Parsing JSON yang aman
function parseData(json: string): unknown {
    return JSON.parse(json);
}

const data = parseData('{"nama": "Budi", "usia": 25}');

// Perlu type checking
if (typeof data === "object" && data !== null && "nama" in data) {
    console.log((data as { nama: string }).nama);
}
```

### 8. Void dan Never
`void` digunakan untuk fungsi yang tidak mengembalikan nilai, sedangkan `never` untuk fungsi yang tidak pernah mengembalikan nilai.

```typescript
// Contoh void
function log(message: string): void {
    console.log(message);
}

// Contoh never
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // ...
    }
}

// Contoh praktis: Handler error
function processData(data: unknown): string {
    if (typeof data === "string") {
        return data.toUpperCase();
    } else if (typeof data === "number") {
        return data.toString();
    }
    
    return throwError("Data type not supported");
}
```

### Tips Penggunaan Tipe Data
1. Selalu tentukan tipe data secara eksplisit untuk parameter fungsi
2. Manfaatkan type inference TypeScript untuk variabel lokal
3. Hindari penggunaan `any` kecuali benar-benar diperlukan
4. Gunakan `unknown` sebagai pengganti `any` untuk keamanan tipe yang lebih baik
5. Manfaatkan tuple untuk data yang berkaitan dengan jumlah tetap
6. Gunakan enum untuk sekumpulan nilai yang terbatas dan terdefinisi

### Latihan Praktik
1. Buat fungsi untuk menghitung BMI (Body Mass Index)
2. Buat sistem pencatatan nilai siswa dengan array dan tuple
3. Implementasi validasi form pendaftaran
4. Buat enum untuk status pembayaran dan proses bisnis

## Bab 12: Pattern dan Best Practices

### SOLID Principles dalam TypeScript

#### 1. Single Responsibility Principle (SRP)
Setiap class harus memiliki satu, dan hanya satu alasan untuk berubah.

```typescript
// ❌ Buruk: Class dengan banyak tanggung jawab
class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    // Tanggung jawab 1: Validasi data
    validateEmail(): boolean {
        return this.email.includes('@');
    }

    // Tanggung jawab 2: Menyimpan ke database
    saveToDatabase(): void {
        // Logic untuk menyimpan ke database
    }

    // Tanggung jawab 3: Mengirim email
    sendWelcomeEmail(): void {
        // Logic untuk mengirim email
    }
}

// ✅ Baik: Memisahkan tanggung jawab ke class terpisah
class User {
    constructor(
        private name: string,
        private email: string
    ) {}

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }
}

class UserValidator {
    validateEmail(email: string): boolean {
        return email.includes('@');
    }
}

class UserRepository {
    saveUser(user: User): void {
        // Logic untuk menyimpan ke database
    }
}

class EmailService {
    sendWelcomeEmail(user: User): void {
        // Logic untuk mengirim email
    }
}
```

#### 2. Open-Closed Principle (OCP)
Software entities harus terbuka untuk ekstensi, tetapi tertutup untuk modifikasi.

```typescript
// ❌ Buruk: Perlu memodifikasi class untuk menambah shape baru
class AreaCalculator {
    calculateArea(shape: any): number {
        if (shape instanceof Rectangle) {
            return shape.width * shape.height;
        }
        if (shape instanceof Circle) {
            return Math.PI * shape.radius ** 2;
        }
        return 0;
    }
}

// ✅ Baik: Menggunakan interface dan inheritance
interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    constructor(
        private width: number,
        private height: number
    ) {}

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(private radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Bisa menambah shape baru tanpa mengubah AreaCalculator
class Triangle implements Shape {
    constructor(
        private base: number,
        private height: number
    ) {}

    calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}
```

#### 3. Liskov Substitution Principle (LSP)
Objek dari class turunan harus bisa menggantikan objek dari class induk tanpa mengubah correctness program.

```typescript
// ❌ Buruk: Melanggar LSP
class Bird {
    fly(): void {
        // Logic untuk terbang
    }
}

class Penguin extends Bird {
    fly(): void {
        throw new Error("Penguin tidak bisa terbang!");
    }
}

// ✅ Baik: Menggunakan interface yang sesuai
interface CanWalk {
    walk(): void;
}

interface CanFly {
    fly(): void;
}

class Bird implements CanWalk, CanFly {
    walk(): void {
        // Logic untuk berjalan
    }

    fly(): void {
        // Logic untuk terbang
    }
}

class Penguin implements CanWalk {
    walk(): void {
        // Logic untuk berjalan
    }
}
```

#### 4. Interface Segregation Principle (ISP)
Client tidak boleh dipaksa bergantung pada interface yang tidak mereka gunakan.

```typescript
// ❌ Buruk: Interface yang terlalu besar
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}

class Human implements Worker {
    work() { /* ... */ }
    eat() { /* ... */ }
    sleep() { /* ... */ }
}

class Robot implements Worker {
    work() { /* ... */ }
    eat() { throw new Error("Robot tidak makan!"); }
    sleep() { throw new Error("Robot tidak tidur!"); }
}

// ✅ Baik: Interface yang lebih spesifik
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

interface Sleepable {
    sleep(): void;
}

class Human implements Workable, Eatable, Sleepable {
    work() { /* ... */ }
    eat() { /* ... */ }
    sleep() { /* ... */ }
}

class Robot implements Workable {
    work() { /* ... */ }
}
```

#### 5. Dependency Inversion Principle (DIP)
Module level tinggi tidak boleh bergantung pada module level rendah. Keduanya harus bergantung pada abstraksi.

```typescript
// ❌ Buruk: Ketergantungan langsung pada implementasi
class MySQLDatabase {
    save(data: any): void {
        // Logic untuk menyimpan ke MySQL
    }
}

class UserService {
    private database: MySQLDatabase;

    constructor() {
        this.database = new MySQLDatabase();
    }

    saveUser(user: any): void {
        this.database.save(user);
    }
}

// ✅ Baik: Menggunakan abstraksi (interface)
interface Database {
    save(data: any): void;
}

class MySQLDatabase implements Database {
    save(data: any): void {
        // Logic untuk menyimpan ke MySQL
    }
}

class MongoDatabase implements Database {
    save(data: any): void {
        // Logic untuk menyimpan ke MongoDB
    }
}

class UserService {
    constructor(private database: Database) {}

    saveUser(user: any): void {
        this.database.save(user);
    }
}
```

### Design Patterns

#### 1. Singleton Pattern
Memastikan class hanya memiliki satu instance dan menyediakan akses global ke instance tersebut.

```typescript
class Database {
    private static instance: Database;
    private constructor() {
        // Inisialisasi koneksi database
    }

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    query(sql: string): void {
        // Eksekusi query
    }
}

// Penggunaan
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true
```

#### 2. Factory Pattern
Membuat interface untuk menciptakan objek tetapi membiarkan subclass memutuskan class mana yang akan diinstansiasi.

```typescript
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak(): string {
        return "Woof!";
    }
}

class Cat implements Animal {
    speak(): string {
        return "Meow!";
    }
}

class AnimalFactory {
    createAnimal(type: string): Animal {
        switch (type.toLowerCase()) {
            case "dog":
                return new Dog();
            case "cat":
                return new Cat();
            default:
                throw new Error("Animal type not supported");
        }
    }
}

// Penggunaan
const factory = new AnimalFactory();
const dog = factory.createAnimal("dog");
console.log(dog.speak()); // "Woof!"
```

#### 3. Observer Pattern
Mendefinisikan ketergantungan one-to-many antar objek sehingga ketika satu objek berubah state, semua dependennya diberitahu dan diupdate secara otomatis.

```typescript
interface Observer {
    update(data: any): void;
}

class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Contoh implementasi
class NewsAgency extends Subject {
    publishNews(news: string): void {
        this.notify(news);
    }
}

class NewsChannel implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(news: string): void {
        console.log(`${this.name} menerima berita: ${news}`);
    }
}

// Penggunaan
const newsAgency = new NewsAgency();
const channel1 = new NewsChannel("Channel 1");
const channel2 = new NewsChannel("Channel 2");

newsAgency.addObserver(channel1);
newsAgency.addObserver(channel2);

newsAgency.publishNews("Breaking News!");
// Output:
// Channel 1 menerima berita: Breaking News!
// Channel 2 menerima berita: Breaking News!
```

### Best Practices

1. **Gunakan Type Inference**
```typescript
// ❌ Buruk: Tipe eksplisit tidak diperlukan
let message: string = "Hello";

// ✅ Baik: Biarkan TypeScript melakukan inference
let message = "Hello";
```

2. **Gunakan Union Types untuk Nilai yang Terbatas**
```typescript
// ❌ Buruk: Menggunakan string
function setStatus(status: string) { }

// ✅ Baik: Menggunakan union type
type Status = "active" | "inactive" | "pending";
function setStatus(status: Status) { }
```

3. **Manfaatkan Readonly untuk Immutability**
```typescript
// ❌ Buruk: Data bisa dimodifikasi
interface Config {
    apiKey: string;
    endpoint: string;
}

// ✅ Baik: Data immutable
interface Config {
    readonly apiKey: string;
    readonly endpoint: string;
}
```

4. **Gunakan Type Guards untuk Type Safety**
```typescript
// ❌ Buruk: Type assertion langsung
function processValue(value: string | number) {
    const strValue = value as string;
    strValue.toUpperCase();
}

// ✅ Baik: Menggunakan type guard
function processValue(value: string | number) {
    if (typeof value === "string") {
        value.toUpperCase();
    }
}
```

### Latihan Praktik
1. Implementasikan sistem notifikasi menggunakan Observer Pattern
2. Buat factory untuk membuat berbagai jenis form validation
3. Terapkan SOLID principles pada proyek Todo List
4. Refactor kode yang melanggar SOLID principles

## Bab 13: Testing dan Error Handling

### Unit Testing dengan Jest

#### 1. Setup Testing Environment
```typescript
// package.json
{
    "scripts": {
        "test": "jest",
        "test:watch": "jest --watch"
    },
    "devDependencies": {
        "@types/jest": "^29.5.0",
        "jest": "^29.5.0",
        "ts-jest": "^29.1.0",
        "typescript": "^5.0.0"
    }
}

// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/*.test.ts'],
};
```

#### 2. Basic Testing
```typescript
// calculator.ts
export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol");
        }
        return a / b;
    }
}

// calculator.test.ts
import { Calculator } from './calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        it('should add two numbers correctly', () => {
            expect(calculator.add(2, 3)).toBe(5);
            expect(calculator.add(-1, 1)).toBe(0);
            expect(calculator.add(0, 0)).toBe(0);
        });
    });

    describe('divide', () => {
        it('should divide two numbers correctly', () => {
            expect(calculator.divide(6, 2)).toBe(3);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => calculator.divide(6, 0)).toThrow('Tidak bisa membagi dengan nol');
        });
    });
});
```

#### 3. Testing Asynchronous Code
```typescript
// userService.ts
export interface User {
    id: number;
    name: string;
    email: string;
}

export class UserService {
    async fetchUser(id: number): Promise<User> {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        return response.json();
    }

    async createUser(user: Omit<User, 'id'>): Promise<User> {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        return response.json();
    }
}

// userService.test.ts
import { UserService } from './userService';

describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
        global.fetch = jest.fn();
    });

    describe('fetchUser', () => {
        it('should fetch user successfully', async () => {
            const mockUser = { id: 1, name: 'John', email: 'john@example.com' };
            (global.fetch as jest.Mock).mockResolvedValueOnce({
                ok: true,
                json: async () => mockUser
            });

            const user = await userService.fetchUser(1);
            expect(user).toEqual(mockUser);
        });

        it('should throw error when user not found', async () => {
            (global.fetch as jest.Mock).mockResolvedValueOnce({
                ok: false
            });

            await expect(userService.fetchUser(999)).rejects.toThrow('User not found');
        });
    });
});
```

### Error Handling

#### 1. Custom Error Classes
```typescript
// errors.ts
export class ApplicationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ApplicationError';
    }
}

export class ValidationError extends ApplicationError {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

export class DatabaseError extends ApplicationError {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}

// userService.ts
import { ValidationError, DatabaseError } from './errors';

export class UserService {
    validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new ValidationError('Email tidak valid');
        }
        return true;
    }

    async saveUser(user: User): Promise<void> {
        try {
            await database.save(user);
        } catch (error) {
            throw new DatabaseError('Gagal menyimpan user ke database');
        }
    }
}
```

#### 2. Error Handling Best Practices
```typescript
// ❌ Buruk: Menangkap semua error tanpa diskriminasi
try {
    await riskyOperation();
} catch (error) {
    console.log('Error:', error);
}

// ✅ Baik: Menangkap error spesifik dan memberikan respons yang sesuai
try {
    await riskyOperation();
} catch (error) {
    if (error instanceof ValidationError) {
        // Handle validation errors
        showValidationMessage(error.message);
    } else if (error instanceof DatabaseError) {
        // Handle database errors
        logError(error);
        showTechnicalErrorMessage();
    } else {
        // Handle unexpected errors
        logError(error);
        showGenericErrorMessage();
    }
}
```

#### 3. Async Error Handling
```typescript
// ❌ Buruk: Callback hell dengan error handling
fetchUser(userId, (userError, user) => {
    if (userError) {
        handleError(userError);
        return;
    }
    
    fetchOrders(user.id, (orderError, orders) => {
        if (orderError) {
            handleError(orderError);
            return;
        }
        
        processOrders(orders);
    });
});

// ✅ Baik: Async/await dengan proper error handling
async function processUserOrders(userId: number): Promise<void> {
    try {
        const user = await fetchUser(userId);
        const orders = await fetchOrders(user.id);
        await processOrders(orders);
    } catch (error) {
        if (error instanceof UserNotFoundError) {
            // Handle user not found
        } else if (error instanceof OrderFetchError) {
            // Handle order fetch error
        } else {
            // Handle unexpected errors
        }
    }
}
```

#### 4. Result Type Pattern
```typescript
// result.ts
export type Result<T, E = Error> = Success<T> | Failure<E>;

interface Success<T> {
    success: true;
    data: T;
}

interface Failure<E> {
    success: false;
    error: E;
}

export function success<T>(data: T): Success<T> {
    return { success: true, data };
}

export function failure<E>(error: E): Failure<E> {
    return { success: false, error };
}

// userService.ts
import { Result, success, failure } from './result';

export class UserService {
    async createUser(data: CreateUserDTO): Promise<Result<User, ValidationError | DatabaseError>> {
        try {
            this.validateUser(data);
            const user = await this.saveUser(data);
            return success(user);
        } catch (error) {
            if (error instanceof ValidationError || error instanceof DatabaseError) {
                return failure(error);
            }
            throw error; // Re-throw unexpected errors
        }
    }
}

// usage
const result = await userService.createUser(data);
if (result.success) {
    // Handle success case
    console.log('User created:', result.data);
} else {
    // Handle error case
    console.error('Failed to create user:', result.error.message);
}
```

### Testing Best Practices

1. **Arrange-Act-Assert Pattern**
```typescript
describe('UserService', () => {
    it('should create user successfully', () => {
        // Arrange
        const service = new UserService();
        const userData = { name: 'John', email: 'john@example.com' };

        // Act
        const result = service.createUser(userData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.name).toBe('John');
    });
});
```

2. **Test Isolation**
```typescript
describe('OrderService', () => {
    let orderService: OrderService;
    let mockDatabase: jest.Mocked<Database>;

    beforeEach(() => {
        // Reset mocks before each test
        mockDatabase = {
            save: jest.fn(),
            find: jest.fn(),
            delete: jest.fn()
        };
        orderService = new OrderService(mockDatabase);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    // Tests...
});
```

3. **Testing Edge Cases**
```typescript
describe('divide', () => {
    it('should handle normal division', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should handle division by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow();
    });

    it('should handle decimal results', () => {
        expect(calculator.divide(5, 2)).toBe(2.5);
    });

    it('should handle negative numbers', () => {
        expect(calculator.divide(-10, 2)).toBe(-5);
        expect(calculator.divide(10, -2)).toBe(-5);
        expect(calculator.divide(-10, -2)).toBe(5);
    });
});
```

### Latihan Praktik
1. Buat suite test untuk Todo List application
2. Implementasi error handling untuk form validation
3. Buat custom error classes untuk domain spesifik
4. Implementasi Result pattern untuk API calls

## Bab 14: TypeScript dengan Framework Modern

### TypeScript dengan React

#### 1. Setup Project React + TypeScript
```bash
# Menggunakan Create React App
npx create-react-app my-app --template typescript

# Menggunakan Vite
npm create vite@latest my-app -- --template react-ts
```

#### 2. Component Types
```typescript
// Function Component dengan Props
interface GreetingProps {
    name: string;
    age?: number; // Optional prop
    children?: React.ReactNode;
}

const Greeting: React.FC<GreetingProps> = ({ name, age, children }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            {age && <p>You are {age} years old</p>}
            {children}
        </div>
    );
};

// Class Component
interface CounterState {
    count: number;
}

class Counter extends React.Component<{}, CounterState> {
    state: CounterState = {
        count: 0
    };

    increment = () => {
        this.setState(prev => ({ count: prev.count + 1 }));
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
```

#### 3. Hooks dengan TypeScript
```typescript
// useState
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);

// useRef
const inputRef = useRef<HTMLInputElement>(null);

// useEffect
useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/api/data');
        const data: ApiResponse = await response.json();
        // ...
    };
    fetchData();
}, []);

// Custom Hook
interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

function useFetch<T>(url: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error'));
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
}
```

### TypeScript dengan Vue 3

#### 1. Setup Project Vue + TypeScript
```bash
# Menggunakan Vue CLI
vue create my-app
# Pilih "Manually select features" dan pilih TypeScript

# Menggunakan Vite
npm create vite@latest my-app -- --template vue-ts
```

#### 2. Component dengan Composition API
```typescript
// Component dengan Props dan Emits
import { defineComponent, ref, PropType } from 'vue';

interface User {
    id: number;
    name: string;
}

export default defineComponent({
    name: 'UserProfile',
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        },
        theme: {
            type: String as PropType<'light' | 'dark'>,
            default: 'light'
        }
    },
    emits: {
        'update:user': (user: User) => true
    },
    setup(props, { emit }) {
        const isEditing = ref(false);

        const updateUser = (newName: string) => {
            emit('update:user', {
                ...props.user,
                name: newName
            });
        };

        return {
            isEditing,
            updateUser
        };
    }
});
```

#### 3. Composables (Custom Hooks)
```typescript
// useCounter.ts
import { ref, Ref } from 'vue';

interface UseCounterReturn {
    count: Ref<number>;
    increment: () => void;
    decrement: () => void;
}

export function useCounter(initial: number = 0): UseCounterReturn {
    const count = ref(initial);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return {
        count,
        increment,
        decrement
    };
}

// Penggunaan dalam component
import { defineComponent } from 'vue';
import { useCounter } from './composables/useCounter';

export default defineComponent({
    setup() {
        const { count, increment, decrement } = useCounter(0);

        return {
            count,
            increment,
            decrement
        };
    }
});
```

### TypeScript dengan Angular

#### 1. Setup Project Angular
```bash
# Install Angular CLI
npm install -g @angular/cli

# Buat project baru
ng new my-app
# Angular sudah menggunakan TypeScript secara default
```

#### 2. Components dan Services
```typescript
// user.model.ts
export interface User {
    id: number;
    name: string;
    email: string;
}

// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = '/api/users';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/${id}`);
    }

    createUser(user: Omit<User, 'id'>): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }
}

// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
    selector: 'app-user-list',
    template: `
        <div *ngIf="loading">Loading...</div>
        <ul *ngIf="!loading">
            <li *ngFor="let user of users">
                {{ user.name }} ({{ user.email }})
            </li>
        </ul>
    `
})
export class UserListComponent implements OnInit {
    users: User[] = [];
    loading = true;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getUsers().subscribe({
            next: (users) => {
                this.users = users;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error fetching users:', error);
                this.loading = false;
            }
        });
    }
}
```

#### 3. Forms dan Validasi
```typescript
// user-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
    selector: 'app-user-form',
    template: `
        <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
            <div>
                <label>Name:</label>
                <input type="text" formControlName="name">
                <div *ngIf="userForm.get('name')?.errors?.['required']">
                    Name is required
                </div>
            </div>

            <div>
                <label>Email:</label>
                <input type="email" formControlName="email">
                <div *ngIf="userForm.get('email')?.errors?.['email']">
                    Invalid email format
                </div>
            </div>

            <button type="submit" [disabled]="userForm.invalid">
                Submit
            </button>
        </form>
    `
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService
    ) {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit(): void {
        if (this.userForm.valid) {
            this.userService.createUser(this.userForm.value).subscribe({
                next: (user) => {
                    console.log('User created:', user);
                    this.userForm.reset();
                },
                error: (error) => {
                    console.error('Error creating user:', error);
                }
            });
        }
    }
}
```

### Perbandingan Framework

1. **React + TypeScript**
   - Fleksibel dan minimalis
   - Ekosistem yang besar
   - Banyak pilihan untuk state management
   - Learning curve moderat

2. **Vue + TypeScript**
   - Dokumentasi yang sangat baik
   - Syntax yang intuitif
   - Composition API yang powerful
   - Learning curve rendah

3. **Angular**
   - Full-featured framework
   - TypeScript by default
   - Arsitektur yang terstruktur
   - Learning curve tinggi

### Best Practices

1. **Gunakan Strict Mode**
```json
// tsconfig.json
{
    "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true
    }
}
```

2. **Definisikan Types untuk State Management**
```typescript
// Redux dengan TypeScript
interface RootState {
    user: UserState;
    posts: PostState;
}

interface UserState {
    currentUser: User | null;
    loading: boolean;
    error: string | null;
}

// Vuex dengan TypeScript
interface State {
    user: User | null;
    theme: 'light' | 'dark';
}

// NgRx dengan TypeScript
interface AppState {
    user: UserState;
    settings: SettingsState;
}
```

3. **Gunakan Type Guards**
```typescript
function isUser(obj: any): obj is User {
    return 'id' in obj && 'name' in obj && 'email' in obj;
}

// Penggunaan
const data = await fetchSomething();
if (isUser(data)) {
    // TypeScript tahu bahwa data adalah User
    console.log(data.name);
}
```

### Latihan Praktik
1. Buat aplikasi Todo List dengan React dan TypeScript
2. Implementasi form kompleks dengan Vue 3 dan TypeScript
3. Buat CRUD application dengan Angular
4. Integrasikan state management di masing-masing framework

## Bab 15: Tools dan Ekosistem TypeScript

### Package Managers

#### 1. NPM (Node Package Manager)
```bash
# Inisialisasi proyek baru
npm init -y

# Install TypeScript
npm install typescript --save-dev

# Install dependencies
npm install package-name

# Install dev dependencies
npm install package-name --save-dev

# Update dependencies
npm update

# Run scripts
npm run script-name
```

#### 2. Yarn
```bash
# Inisialisasi proyek baru
yarn init

# Install dependencies
yarn add package-name

# Install dev dependencies
yarn add package-name --dev

# Update dependencies
yarn upgrade

# Run scripts
yarn script-name
```

#### 3. PNPM
```bash
# Install pnpm
npm install -g pnpm

# Inisialisasi proyek
pnpm init

# Install dependencies
pnpm add package-name

# Install dev dependencies
pnpm add -D package-name

# Update dependencies
pnpm update

# Run scripts
pnpm script-name
```

### Build Tools

#### 1. Webpack
```typescript
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```

#### 2. Vite
```bash
# Create new project
npm create vite@latest my-app -- --template typescript

# Install dependencies
cd my-app
npm install
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        target: 'esnext',
        outDir: 'dist',
    },
});
```

#### 3. ESBuild
```typescript
// esbuild.config.js
require('esbuild').build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/bundle.js',
    platform: 'node',
    target: ['node14'],
}).catch(() => process.exit(1));
```

### Linting dan Formatting

#### 1. ESLint
```json
// .eslintrc.json
{
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error"
    }
}
```

#### 2. Prettier
```json
// .prettierrc
{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 2
}
```

### Documentation Tools

#### 1. TypeDoc
```json
// typedoc.json
{
    "entryPoints": ["src/index.ts"],
    "out": "docs",
    "name": "My TypeScript Project",
    "excludePrivate": true,
    "excludeProtected": true,
    "theme": "default"
}
```

```typescript
/**
 * Represents a user in the system
 */
interface User {
    /** The unique identifier for the user */
    id: number;
    /** The user's full name */
    name: string;
    /** The user's email address */
    email: string;
}

/**
 * Fetches a user by their ID
 * @param id - The user's ID
 * @returns A promise that resolves to the user object
 * @throws {Error} If the user is not found
 */
async function getUser(id: number): Promise<User> {
    // Implementation
}
```

### Testing Tools

#### 1. Jest
```typescript
// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/*.test.ts'],
};

// user.test.ts
import { User } from './user';

describe('User', () => {
    it('should create user correctly', () => {
        const user = new User('John', 'john@example.com');
        expect(user.name).toBe('John');
        expect(user.email).toBe('john@example.com');
    });
});
```

#### 2. Vitest
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
    },
});

// calculator.test.ts
import { describe, it, expect } from 'vitest';
import { Calculator } from './calculator';

describe('Calculator', () => {
    it('should add numbers correctly', () => {
        const calc = new Calculator();
        expect(calc.add(2, 3)).toBe(5);
    });
});
```

### CI/CD Integration

#### 1. GitHub Actions
```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linting
      run: npm run lint
      
    - name: Run tests
      run: npm test
      
    - name: Build
      run: npm run build
```

### IDE dan Editor Support

#### 1. Visual Studio Code
- TypeScript IntelliSense
- Auto-completion
- Error detection
- Quick fixes
- Refactoring tools

Settings rekomendasi untuk VS Code:
```json
// .vscode/settings.json
{
    "typescript.updateImportsOnFileMove.enabled": "always",
    "typescript.suggestionActions.enabled": true,
    "typescript.validate.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

#### 2. WebStorm
- Built-in TypeScript support
- Advanced refactoring
- Integrated debugger
- Test runner

### Best Practices

1. **Gunakan Lock Files**
```bash
# NPM
npm ci  # Install berdasarkan package-lock.json

# Yarn
yarn install --frozen-lockfile

# PNPM
pnpm install --frozen-lockfile
```

2. **Automasi Proses Development**
```json
// package.json
{
    "scripts": {
        "start": "vite",
        "build": "tsc && vite build",
        "test": "vitest",
        "lint": "eslint src --ext .ts,.tsx",
        "format": "prettier --write \"src/**/*.{ts,tsx}\"",
        "docs": "typedoc",
        "prepare": "husky install"
    }
}
```

3. **Git Hooks dengan Husky**
```json
// .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run test
```

### Latihan Praktik
1. Setup proyek TypeScript dengan Vite dan ESLint
2. Implementasi CI/CD pipeline dengan GitHub Actions
3. Buat dokumentasi otomatis dengan TypeDoc
4. Konfigurasi testing environment dengan Jest atau Vitest

## Bab 16: Project Praktis

### Project 1: Todo List Application dengan React dan TypeScript

#### 1. Setup Project
```bash
# Buat project baru
npx create-react-app todo-app --template typescript

# Install dependencies
cd todo-app
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

#### 2. Definisi Types
```typescript
// src/types/todo.ts
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export type TodoInput = Omit<Todo, 'id' | 'createdAt'>;
```

#### 3. Components
```typescript
// src/components/TodoForm.tsx
import React, { useState } from 'react';
import { TodoInput } from '../types/todo';

interface Props {
    onSubmit: (todo: TodoInput) => void;
}

export const TodoForm: React.FC<Props> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        onSubmit({
            title,
            completed: false
        });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tambah todo baru..."
            />
            <button type="submit">Tambah</button>
        </form>
    );
};

// src/components/TodoList.tsx
import React from 'react';
import { Todo } from '../types/todo';

interface Props {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                    />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.title}
            </span>
                    <button onClick={() => onDelete(todo.id)}>Hapus</button>
        </li>
            ))}
        </ul>
    );
};
```

#### 4. Hooks dan State Management
```typescript
// src/hooks/useTodos.ts
import { useState, useCallback } from 'react';
import { Todo, TodoInput } from '../types/todo';
import { v4 as uuidv4 } from 'uuid';

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = useCallback((input: TodoInput) => {
        const newTodo: Todo = {
            id: uuidv4(),
            ...input,
            createdAt: new Date()
        };
        setTodos(prev => [...prev, newTodo]);
    }, []);

    const toggleTodo = useCallback((id: string) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }, []);

    const deleteTodo = useCallback((id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []);

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
    };
};
```

### Project 2: REST API dengan Express dan TypeScript

#### 1. Setup Project
```bash
# Inisialisasi project
mkdir ts-express-api
cd ts-express-api
npm init -y

# Install dependencies
npm install express cors dotenv mongoose
npm install -D typescript @types/express @types/cors @types/node ts-node-dev
```

#### 2. Konfigurasi TypeScript
```json
// tsconfig.json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```

#### 3. Model dan Interface
```typescript
// src/models/User.ts
import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model<IUser>('User', userSchema);
```

#### 4. Controllers dan Routes
```typescript
// src/controllers/userController.ts
import { Request, Response } from 'express';
import { User, IUser } from '../models/User';

export const createUser = async (req: Request, res: Response) => {
    try {
        const user: IUser = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// src/routes/userRoutes.ts
import { Router } from 'express';
import { createUser, getUsers } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);

export default router;
```

#### 5. App Configuration
```typescript
// src/app.ts
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ts-express-api')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

export default app;
```

### Project 3: Real-time Chat Application

#### 1. Setup Project
```bash
# Setup client
npx create-react-app chat-app --template typescript
cd chat-app
npm install socket.io-client @chakra-ui/react

# Setup server
mkdir server
cd server
npm init -y
npm install express socket.io cors
npm install -D typescript @types/express @types/socket.io
```

#### 2. Server Implementation
```typescript
// server/src/app.ts
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

interface Message {
    id: string;
    user: string;
    text: string;
    timestamp: Date;
}

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join_room', (room: string) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
    });

    socket.on('send_message', (message: Message) => {
        io.to(message.room).emit('receive_message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

#### 3. Client Implementation
```typescript
// src/components/Chat.tsx
import React, { useState, useEffect } from 'react';
import { Socket, io } from 'socket.io-client';

interface Message {
    id: string;
    user: string;
    text: string;
    timestamp: Date;
}

const Chat: React.FC = () => {
    const [socket, setSocket] = useState<Socket>();
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageInput, setMessageInput] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    useEffect(() => {
        if (!socket) return;

        socket.on('receive_message', (message: Message) => {
            setMessages(prev => [...prev, message]);
        });

        return () => {
            socket.off('receive_message');
        };
    }, [socket]);

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!socket || !messageInput.trim()) return;

        const message: Message = {
            id: Date.now().toString(),
            user: username,
            text: messageInput,
            timestamp: new Date()
        };

        socket.emit('send_message', message);
        setMessageInput('');
    };

    return (
        <div>
            <div className="messages">
                {messages.map(msg => (
                    <div key={msg.id}>
                        <strong>{msg.user}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
            <input
                type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
        </form>
        </div>
    );
};

export default Chat;
```

### Latihan Praktik
1. Tambahkan fitur filter dan pencarian pada Todo List
2. Implementasi autentikasi JWT pada REST API
3. Tambahkan fitur private chat dan typing indicator pada Chat App
4. Buat unit test untuk semua komponen

## Bab 17: Security dan Performance

### Security Best Practices

#### 1. Input Validation dan Sanitization
```typescript
// Contoh validasi input menggunakan Zod
import { z } from 'zod';

const UserSchema = z.object({
    username: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(8).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
});

type User = z.infer<typeof UserSchema>;

function createUser(input: unknown): User {
    const validatedData = UserSchema.parse(input);
    // Proses data yang sudah tervalidasi
    return validatedData;
}

// Contoh sanitasi HTML menggunakan DOMPurify
import DOMPurify from 'dompurify';

function sanitizeHtml(dirty: string): string {
    return DOMPurify.sanitize(dirty);
}
```

#### 2. Authentication dan Authorization
```typescript
// JWT Authentication
import jwt from 'jsonwebtoken';

interface TokenPayload {
    userId: string;
    role: string;
}

function generateToken(payload: TokenPayload): string {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: '1h'
    });
}

function verifyToken(token: string): TokenPayload {
    return jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
}

// Role-based Authorization
enum Role {
    USER = 'user',
    ADMIN = 'admin'
}

function checkPermission(userRole: Role, requiredRole: Role): boolean {
    const roleHierarchy = {
        [Role.ADMIN]: [Role.ADMIN, Role.USER],
        [Role.USER]: [Role.USER]
    };
    
    return roleHierarchy[userRole].includes(requiredRole);
}
```

#### 3. XSS Protection
```typescript
// React dengan TypeScript
function SafeHtml({ html }: { html: string }) {
    return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
}

// Express dengan Helmet
import helmet from 'helmet';
import express from 'express';

const app = express();
app.use(helmet());
```

#### 4. CSRF Protection
```typescript
// Express dengan csurf
import csrf from 'csurf';

const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);
app.get('/form', (req, res) => {
    res.render('form', { csrfToken: req.csrfToken() });
});
```

### Performance Optimization

#### 1. Code Splitting
```typescript
// React dengan lazy loading
import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
        </Suspense>
    );
}

// Dynamic imports
async function loadModule() {
    const module = await import('./heavyModule');
    return module;
}
```

#### 2. Memoization
```typescript
// React dengan useMemo dan useCallback
import React, { useMemo, useCallback } from 'react';

function ExpensiveComponent({ data, onUpdate }: Props) {
    const processedData = useMemo(() => {
        return expensiveCalculation(data);
    }, [data]);

    const handleClick = useCallback(() => {
        onUpdate(processedData);
    }, [processedData, onUpdate]);

    return (
        <div onClick={handleClick}>
            {processedData}
        </div>
    );
}

// Custom memoization utility
function memoize<T extends (...args: any[]) => any>(
    fn: T
): (...args: Parameters<T>) => ReturnType<T> {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
```

#### 3. Memory Management
```typescript
// Memory leaks prevention
class ResourceManager {
    private resources: Set<Resource> = new Set();

    addResource(resource: Resource) {
        this.resources.add(resource);
    }

    removeResource(resource: Resource) {
        this.resources.delete(resource);
    }

    cleanup() {
        this.resources.forEach(resource => {
            resource.dispose();
        });
        this.resources.clear();
    }
}

// WeakMap untuk mencegah memory leaks
const cache = new WeakMap<object, any>();

function getCachedData(key: object): any {
    return cache.get(key);
}

function setCachedData(key: object, value: any): void {
    cache.set(key, value);
}
```

### Error Tracking dan Logging

#### 1. Error Handling
```typescript
// Custom error classes
class AppError extends Error {
    constructor(
        public statusCode: number,
        message: string
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class ValidationError extends AppError {
    constructor(message: string) {
        super(400, message);
    }
}

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }

    console.error('Unexpected error:', err);
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
```

#### 2. Logging
```typescript
// Winston logger setup
import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Logging middleware
function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info({
            method: req.method,
            path: req.path,
            statusCode: res.statusCode,
            duration
        });
    });

    next();
}
```

#### 3. Performance Monitoring
```typescript
// Performance monitoring dengan custom metrics
class PerformanceMonitor {
    private metrics: Map<string, number[]> = new Map();

    measure(name: string, value: number) {
        if (!this.metrics.has(name)) {
            this.metrics.set(name, []);
        }
        this.metrics.get(name)!.push(value);
    }

    async trackOperation<T>(
        name: string,
        operation: () => Promise<T>
    ): Promise<T> {
        const start = performance.now();
        try {
            const result = await operation();
            const duration = performance.now() - start;
            this.measure(name, duration);
            return result;
        } catch (error) {
            const duration = performance.now() - start;
            this.measure(`${name}_error`, duration);
            throw error;
        }
    }

    getMetrics() {
        const result: Record<string, { avg: number; count: number }> = {};
        
        this.metrics.forEach((values, name) => {
            const sum = values.reduce((a, b) => a + b, 0);
            result[name] = {
                avg: sum / values.length,
                count: values.length
            };
        });

        return result;
    }
}
```

### Rate Limiting dan Protection

#### 1. Rate Limiting
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

// Custom rate limiter dengan Redis
import Redis from 'ioredis';

class RateLimiter {
    constructor(
        private redis: Redis,
        private windowMs: number,
        private max: number
    ) {}

    async checkLimit(key: string): Promise<boolean> {
        const current = await this.redis.incr(key);
        if (current === 1) {
            await this.redis.expire(key, this.windowMs / 1000);
        }
        return current <= this.max;
    }
}
```

#### 2. Security Headers
```typescript
import helmet from 'helmet';

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
    referrerPolicy: { policy: 'same-origin' }
}));
```

### Latihan Praktik
1. Implementasi sistem autentikasi dengan JWT dan refresh tokens
2. Buat custom error handling system
3. Setup logging dan monitoring untuk production
4. Implementasi rate limiting dengan Redis

## Bab 18: Advanced TypeScript Patterns

### Dependency Injection

#### 1. Basic DI Container
```typescript
// src/di/container.ts
type Constructor<T = any> = new (...args: any[]) => T;

class Container {
    private services: Map<string, any> = new Map();

    register<T>(token: string, service: Constructor<T>): void {
        this.services.set(token, new service());
    }

    resolve<T>(token: string): T {
        return this.services.get(token);
    }
}
```

## Bab 20: TypeScript di Enterprise

### Arsitektur Skala Besar

#### 1. Clean Architecture
```typescript
// src/domain/entities/user.entity.ts
export class User {
    constructor(
        private id: string,
        private email: string,
        private name: string,
        private createdAt: Date
    ) {}

    // Domain logic methods
    updateName(newName: string): void {
        if (newName.length < 2) {
            throw new Error('Name too short');
        }
        this.name = newName;
    }
}

// src/application/use-cases/create-user.use-case.ts
export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private emailService: IEmailService
    ) {}

    async execute(dto: CreateUserDTO): Promise<User> {
        const user = new User(
            generateId(),
            dto.email,
            dto.name,
            new Date()
        );

        await this.userRepository.save(user);
        await this.emailService.sendWelcomeEmail(user.email);

        return user;
    }
}

// src/infrastructure/repositories/user.repository.ts
@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async save(user: User): Promise<void> {
        await this.userModel.create(user);
    }
}
```

### Microservices dengan TypeScript

#### 1. Service Communication
```typescript
// src/services/user-service/proto/user.proto
syntax = "proto3";

package user;

service UserService {
    rpc CreateUser (CreateUserRequest) returns (User);
    rpc GetUser (GetUserRequest) returns (User);
}

message CreateUserRequest {
    string email = 1;
    string name = 2;
}

message GetUserRequest {
    string id = 1;
}

message User {
    string id = 1;
    string email = 2;
    string name = 3;
    string created_at = 4;
}

// src/services/user-service/user.service.ts
import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Injectable()
export class UserService {
    @GrpcMethod('UserService', 'CreateUser')
    async createUser(data: CreateUserRequest): Promise<User> {
        // Implementation
    }

    @GrpcMethod('UserService', 'GetUser')
    async getUser(data: GetUserRequest): Promise<User> {
        // Implementation
    }
}
```

#### 2. Service Discovery
```typescript
// src/infrastructure/service-registry.ts
interface ServiceRegistry {
    register(service: ServiceInfo): Promise<void>;
    discover(serviceName: string): Promise<ServiceInfo>;
}

class ConsulServiceRegistry implements ServiceRegistry {
    constructor(private consul: Consul) {}

    async register(service: ServiceInfo): Promise<void> {
        await this.consul.agent.service.register({
            name: service.name,
            address: service.host,
            port: service.port,
            check: {
                http: `http://${service.host}:${service.port}/health`,
                interval: '10s'
            }
        });
    }

    async discover(serviceName: string): Promise<ServiceInfo> {
        const result = await this.consul.catalog.service.nodes(serviceName);
        if (!result.length) {
            throw new Error(`Service ${serviceName} not found`);
        }
        return {
            name: serviceName,
            host: result[0].ServiceAddress,
            port: result[0].ServicePort
        };
    }
}
```

### Domain-Driven Design (DDD)

#### 1. Aggregate Roots
```typescript
// src/domain/aggregates/order.aggregate.ts
class Order extends AggregateRoot {
    private items: OrderItem[] = [];
    private status: OrderStatus;

    constructor(
        private readonly id: string,
        private readonly customerId: string
    ) {
        super();
        this.status = OrderStatus.PENDING;
    }

    addItem(product: Product, quantity: number): void {
        if (this.status !== OrderStatus.PENDING) {
            throw new Error('Cannot modify confirmed order');
        }

        const item = new OrderItem(product, quantity);
        this.items.push(item);
        this.addDomainEvent(new OrderItemAddedEvent(this, item));
    }

    confirm(): void {
        if (this.items.length === 0) {
            throw new Error('Cannot confirm empty order');
        }

        this.status = OrderStatus.CONFIRMED;
        this.addDomainEvent(new OrderConfirmedEvent(this));
    }

    getTotalAmount(): Money {
        return this.items.reduce(
            (total, item) => total.add(item.getSubtotal()),
            Money.zero()
        );
    }
}
```

#### 2. Value Objects
```typescript
// src/domain/value-objects/money.ts
class Money {
    private constructor(
        private readonly amount: number,
        private readonly currency: string
    ) {
        if (amount < 0) {
            throw new Error('Amount cannot be negative');
        }
    }

    static of(amount: number, currency: string): Money {
        return new Money(amount, currency);
    }

    static zero(): Money {
        return new Money(0, 'USD');
    }

    add(other: Money): Money {
        if (this.currency !== other.currency) {
            throw new Error('Cannot add different currencies');
        }
        return new Money(this.amount + other.amount, this.currency);
    }

    equals(other: Money): boolean {
        return this.amount === other.amount && 
               this.currency === other.currency;
    }
}
```

### Event-Driven Architecture

#### 1. Event Bus
```typescript
// src/infrastructure/event-bus.ts
interface EventBus {
    publish<T extends DomainEvent>(event: T): Promise<void>;
    subscribe<T extends DomainEvent>(
        eventType: Constructor<T>,
        handler: EventHandler<T>
    ): void;
}

class RabbitMQEventBus implements EventBus {
    constructor(private connection: Connection) {}

    async publish<T extends DomainEvent>(event: T): Promise<void> {
        const channel = await this.connection.createChannel();
        const exchange = event.constructor.name;

        await channel.assertExchange(exchange, 'fanout', { durable: false });
        channel.publish(
            exchange,
            '',
            Buffer.from(JSON.stringify(event))
        );
    }

    async subscribe<T extends DomainEvent>(
        eventType: Constructor<T>,
        handler: EventHandler<T>
    ): void {
        const channel = await this.connection.createChannel();
        const exchange = eventType.name;
        
        await channel.assertExchange(exchange, 'fanout', { durable: false });
        const q = await channel.assertQueue('', { exclusive: true });
        
        await channel.bindQueue(q.queue, exchange, '');
        
        channel.consume(q.queue, async (msg) => {
            if (msg) {
                const event = JSON.parse(msg.content.toString()) as T;
                await handler.handle(event);
                channel.ack(msg);
            }
        });
    }
}
```

### Monorepo Management

#### 1. Nx Workspace Configuration
```json
// nx.json
{
    "npmScope": "company",
    "affected": {
        "defaultBase": "main"
    },
    "tasksRunnerOptions": {
        "default": {
            "runner": "@nrwl/nx-cloud",
            "options": {
                "cacheableOperations": ["build", "test", "lint"],
                "accessToken": "your-token"
            }
        }
    },
    "targetDefaults": {
        "build": {
            "dependsOn": ["^build"]
        }
    }
}

// workspace.json
{
    "version": 2,
    "projects": {
        "api": {
            "root": "apps/api",
            "sourceRoot": "apps/api/src",
            "projectType": "application",
            "targets": {
                "build": {
                    "executor": "@nrwl/node:webpack",
                    "outputs": ["{options.outputPath}"],
                    "options": {
                        "outputPath": "dist/apps/api",
                        "main": "apps/api/src/main.ts",
                        "tsConfig": "apps/api/tsconfig.app.json"
                    }
                }
            }
        },
        "shared": {
            "root": "libs/shared",
            "sourceRoot": "libs/shared/src",
            "projectType": "library",
            "targets": {
                "build": {
                    "executor": "@nrwl/js:tsc",
                    "outputs": ["{options.outputPath}"],
                    "options": {
                        "outputPath": "dist/libs/shared",
                        "main": "libs/shared/src/index.ts",
                        "tsConfig": "libs/shared/tsconfig.lib.json"
                    }
                }
            }
        }
    }
}
```

### Team Collaboration

#### 1. Code Review Guidelines
```typescript
// Example of code that follows review guidelines
class UserService {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly eventBus: EventBus
    ) {}

    /**
     * Creates a new user and sends welcome email
     * @throws {ValidationError} If user data is invalid
     * @throws {DuplicateEmailError} If email already exists
     */
    async createUser(data: CreateUserDTO): Promise<User> {
        // Validate input
        await this.validateUserData(data);

        // Check for duplicate email
        const existingUser = await this.userRepository
            .findByEmail(data.email);
        
        if (existingUser) {
            throw new DuplicateEmailError(data.email);
        }

        // Create user
        const user = new User({
            id: generateId(),
            email: data.email,
            name: data.name,
            createdAt: new Date()
        });

        // Save and publish event
        await this.userRepository.save(user);
        await this.eventBus.publish(new UserCreatedEvent(user));

        return user;
    }

    private async validateUserData(
        data: CreateUserDTO
    ): Promise<void> {
        const result = await UserSchema.safeParseAsync(data);
        if (!result.success) {
            throw new ValidationError(result.error);
        }
    }
}
```

#### 2. Documentation Standards
```typescript
/**
 * Represents a user in the system
 * @example
 * const user = new User({
 *   id: '123',
 *   email: 'john@example.com',
 *   name: 'John Doe'
 * });
 */
interface User {
    /** Unique identifier for the user */
    id: string;
    
    /** User's email address (must be unique) */
    email: string;
    
    /** User's full name */
    name: string;
    
    /** Timestamp when the user was created */
    createdAt: Date;
}

/**
 * Service for managing users
 * @remarks
 * This service handles all user-related operations including
 * creation, updates, and deletion. It also manages user
 * authentication and authorization.
 */
@Injectable()
class UserService {
    /**
     * Creates a new user
     * @param data - The user data
     * @returns A promise that resolves to the created user
     * @throws {ValidationError} When the user data is invalid
     * @throws {DuplicateEmailError} When the email already exists
     */
    async createUser(data: CreateUserDTO): Promise<User> {
        // Implementation
    }
}
```

### Latihan Praktik
1. Implementasi microservice architecture dengan gRPC
2. Buat event-driven system dengan RabbitMQ
3. Setup monorepo dengan Nx
4. Implementasi DDD patterns dalam proyek enterprise
