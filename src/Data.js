// Data sets.
const Data = ( props ) => {
};

// Returns column names.
Data.getColumnNames = (  dataSet ) => {
    let names = [];
    switch( dataSet ) {
        case "Business": names = [ "Industry", "Sales ($M)", "Employees" ]; break;
        case "Rice": names = [ "Cluster", "Panicle weight (g)", "Panicle length (cm)", "NS", "NFS", "FG (%)", "HG W (g)", "YLD (g/plant)", "PH (cm)", "NT", "NFT", "Name" ]; break;
        default: names = [ "Species", "Sepal Length (cm)", "Sepal Width (cm)", "Petal Length (cm)", "Petal Width (cm)" ]; break;
    }
    return names;
};

// Returns values.
Data.getValues = (  dataSet ) => {
    let data = [];
    switch( dataSet ) {
    
        // Sales and employees of public companies in various industries.
        case "Business": data = [
            [ "Pharma", 9844, 83100 ],
            [ "Pharma", 9422, 54100 ],
            [ "Pharma", 6747, 50816 ],
            [ "Pharma", 6698.4, 34400 ],
            [ "Pharma", 5903.7, 42100 ],
            [ "Pharma", 5453.5, 40929 ],
            [ "Pharma", 4272, 33000 ],
            [ "Pharma", 4175.6, 28200 ],
            [ "Pharma", 3243, 21300 ],
            [ "Pharma", 2916.3, 20100 ],
            [ "Pharma", 1198.3, 8527 ],
            [ "Pharma", 969.2, 3418 ],
            [ "Aerospace", 20276, 159200 ],
            [ "Aerospace", 19765.5, 201400 ],
            [ "Aerospace", 14995, 127926 ],
            [ "Aerospace", 12633.1, 108715 ],
            [ "Aerospace", 12021, 107100 ],
            [ "Aerospace", 10053.2, 102200 ],
            [ "Aerospace", 9932, 82500 ],
            [ "Aerospace", 7440.1, 58000 ],
            [ "Aerospace", 5814.3, 65500 ],
            [ "Aerospace", 5200, 41100 ],
            [ "Aerospace", 3558.8, 28900 ],
            [ "Aerospace", 2072.8, 17700 ],
            [ "Aerospace", 2001, 15100 ],
            [ "Aerospace", 1693, 11400 ],
            [ "Aerospace", 1666.1, 13700 ],
            [ "Aerospace", 1455.6, 10737 ],
            [ "Aerospace", 1047.7, 12000 ],
            [ "Aerospace", 801.8, 6424 ],
            [ "Oil", 86656, 104000 ],
            [ "Oil", 50976, 67900 ],
            [ "Oil", 32416, 37067 ],
            [ "Oil", 29443, 54826 ],
            [ "Oil", 24214, 53648 ],
            [ "Oil", 21703, 31338 ],
            [ "Oil", 17755, 53610 ],
            [ "Oil", 15905, 26600 ],
            [ "Oil", 12492, 21800 ],
            [ "Oil", 10417, 17286 ],
            [ "Oil", 9927, 21600 ],
            [ "Oil", 8685.6, 13232 ],
            [ "Oil", 8016.6, 37800 ],
            [ "Oil", 5589, 8740 ],
            [ "Oil", 4941.2, 3300 ],
            [ "Oil", 3122, 7942 ],
            [ "Oil", 3057.6, 3347 ],
            [ "Oil", 2750, 10700 ],
            [ "Oil", 2090.9, 4800 ],
            [ "Oil", 2018.7, 5994 ],
            [ "Oil", 1683.7, 4538 ],
            [ "Oil", 1440.5, 1680 ],
            [ "Oil", 1402.8, 5745 ],
            [ "Oil", 941.3, 1816 ],
            [ "Oil", 819.3, 5628 ],
            [ "Oil", 773.3, 1800 ],
            [ "Oil", 663.2, 560 ],
            [ "Computer", 63438, 383220 ],
            [ "Computer", 12866, 125800 ],
            [ "Computer", 11899, 95000 ],
            [ "Computer", 1096.9, 82300 ],
            [ "Computer", 5956, 56000 ],
            [ "Computer", 5284, 12068 ],
            [ "Computer", 3078.4, 28334 ],
            [ "Computer", 2959.3, 31404 ],
            [ "Computer", 2952.1, 18000 ],
            [ "Computer", 2876.1, 9500 ],
            [ "Computer", 2153.7, 8200 ],
            [ "Computer", 1769.2, 10200 ],
            [ "Computer", 1643.9, 9548 ],
            [ "Computer", 1382.3, 2900 ],
            [ "Computer", 1324.3, 13740 ],
            [ "Computer", 1014, 9100 ],
            [ "Computer", 990.5, 8578 ],
            [ "Computer", 873.6, 8200 ],
            [ "Computer", 855.1, 7523 ],
            [ "Computer", 784.7, 4708 ],
            [ "Computer", 709.3, 5000 ],
            [ "Soap", 21689, 79300 ],
            [ "Soap", 8113.8, 30567 ],
            [ "Soap", 5110.2, 24100 ],
            [ "Soap", 3395.9, 28400 ],
            [ "Soap", 1471.2, 5300 ],
            [ "Soap", 869.5, 4217 ],
            [ "Soap", 717.4, 5600 ],
            [ "Soap", 629.2, 2900 ],
            [ "Soap", 594.4, 5721 ],
            [ "Soap", 576.9, 4000 ]
        ]; break;
        
        // Six clusters of rice data, from "Diversity Analysis of Some Traditional Rice Genotypes in Sri Lanka",
        // A. L. Ranawake, U. G. S. Amarasinghe and S. G. J. N. Senanayake
        case "Rice": data = [
            [ 1, 1.74, 26.34, 77.2, 46.5, 61.3, 2.64, 3.83, 151.93, 3.4, 3.1, "Kaluhandiran" ],
            [ 1, 2.04, 24.51, 91.3, 50, 54, 2.56, 4.15, 101.63, 3.4, 3.2, "Kirikara" ],
            [ 2, 2.98, 24.85, 107.3, 70.1, 65.9, 3, 9.99, 119.13, 5.3, 4.9, "Sudu Goda wee" ],
            [ 2, 2.79, 24.88, 96.1, 57.5, 59.9, 3.15, 7.43, 126.33, 4.5, 4.2, "Kiri Naran" ],
            [ 2, 2.73, 25.43, 114.2, 65.9, 56.9, 2.6, 8.62, 114.35, 5.3, 5, "Karayal II" ],
            [ 3, 2.21, 20.5, 107.4, 82.1, 76.2, 2.31, 8.58, 131, 5.3, 5.1, "Kotathavalu I" ],
            [ 3, 1.8, 20.55, 95.7, 67.3, 70.1, 2.14, 7.03, 116.45, 5.6, 5.4, "Dena wee" ],
            [ 3, 1.36, 22.65, 67.9, 45.2, 66.4, 2.35, 4.9, 119.35, 5.3, 4.5, "Herath Banda" ],
            [ 4, 2.96, 25.05, 106.4, 80.5, 75.8, 3.01, 10.52, 100.9, 5.1, 4.8, "Kottakaram" ],
            [ 5, 4.65, 23.03, 157.1, 110.3, 70.8, 3.21, 15.68, 151.65, 5.5, 4.9, "Dandumara" ],
            [ 6, 3.41, 26.48, 150.4, 128.3, 85.7, 2.43, 31.28, 154.38, 11.2, 10, "Hondarawala" ],
            [ 6, 3.14, 22.04, 135.3, 110.1, 81.1, 2.5, 19.26, 144.58, 8.4, 7.8, "Karayal I" ],
            [ 1, 2.04, 24.94, 72.2, 33, 43.5, 3.16, 3.52, 128.1, 5.1, 4.5, "Dewaredderi" ],
            [ 5, 4.18, 21.74, 156.1, 107.8, 69.3, 2.87, 13.9, 110.85, 5.2, 4.8, "Sudu wee" ],
            [ 4, 3.32, 25.48, 156.6, 100.8, 64.4, 2.28, 11.43, 114.9, 5.7, 5, "Akuramboda" ],
            [ 1, 1.52, 23.26, 95.8, 55.4, 58.1, 1.25, 2.06, 119, 3.9, 3.1, "Puwakmalata Samba" ],
            [ 2, 2.64, 25.14, 104.1, 83.9, 80.9, 2.76, 11.03, 126.55, 5.3, 4.8, "Palasithari 601" ],
            [ 1, 2.05, 25.2, 89.6, 55.8, 62.6, 2.55, 4.95, 120.63, 4.1, 3.5, "Murungakayan 3" ],
            [ 1, 1.99, 24.75, 83.1, 50.5, 60.9, 2.54, 4.43, 88.4, 3.9, 3.5, "Murungakayan 101" ],
            [ 4, 3.5, 30.9, 123.4, 91.4, 74.2, 3.02, 13.1, 120.6, 5.2, 4.7, "Bala Ma wee I" ],
            [ 5, 3.5, 20.37, 169.9, 119.4, 70.4, 2.2, 12.41, 128.58, 5.2, 4.8, "Pokuru Samba" ],
            [ 5, 3.11, 19.93, 140.5, 90, 64.1, 2.43, 10.62, 142.43, 5.1, 4.9, "Rata wee" ],
            [ 1, 1.5, 21.7, 104.2, 54.3, 52.2, 1.31, 3.5, 118.75, 5.2, 4.9, "Suduru" ],
            [ 2, 2.32, 24.61, 102.3, 53.5, 53.7, 2.55, 6.81, 111.9, 5.4, 5, "Ingrisi wee" ],
            [ 2, 2.6, 22.16, 101.7, 51.2, 50.8, 2.85, 7.93, 110.2, 5.8, 5.5, "Kotathavalu II" ],
            [ 2, 2.47, 22.66, 107.7, 57, 54.5, 2.56, 7.42, 106.23, 5.6, 5.1, "Kalu Karayal" ],
            [ 1, 1.57, 23.99, 97.3, 48, 50, 1.49, 3.36, 102.48, 5, 4.8, "Ranruwan" ],
            [ 2, 2.8, 22.51, 110.3, 60.1, 54.5, 2.82, 8.16, 97.33, 5.1, 4.8, "Rajes" ],
            [ 2, 3.54, 22.78, 106.7, 56.7, 53.3, 3.6, 7.52, 99.43, 4, 3.7, "Madoluwa" ],
            [ 1, 1.15, 23.92, 100.1, 50, 50.7, 1.45, 2.41, 101.6, 3.5, 3.3, "Suduru Samba I" ],
            [ 2, 3, 23.52, 129.3, 36.4, 28, 2.55, 4.49, 134.98, 5.3, 4.9, "Handiran" ],
            [ 3, 2.33, 20.5, 94, 64.8, 69.5, 2.81, 9.14, 133.28, 5.3, 5.1, "Gunaratna" ],
            [ 3, 1.65, 21.01, 69.6, 44.3, 65.2, 1.69, 4.57, 130.1, 6.6, 6.2, "Polayal I" ],
            [ 2, 2.76, 24.75, 115.7, 64.9, 56.3, 2.64, 8.9, 130.65, 5.7, 5.2, "Tissa wee" ],
            [ 2, 2.51, 22.66, 107.2, 31.9, 29.8, 2.62, 4.65, 117.75, 5.8, 5.6, "Sudu Karayal" ],
            [ 5, 1.53, 23.09, 129.6, 94.3, 73.4, 1.41, 4.77, 110.4, 3.9, 3.6, "Podisayam" ],
            [ 5, 2.82, 23.35, 145.1, 90.6, 62.6, 2.15, 6.55, 113.88, 3.7, 3.4, "Giress" ],
            [ 4, 3.03, 26.3, 140.3, 110.5, 78.5, 2.37, 12.1, 120.53, 5.1, 4.6, "Naudu wee" ],
            [ 2, 4.02, 22.53, 125.6, 70.3, 56.3, 3.44, 11.64, 125.93, 5.2, 4.8, "Kokuvellai" ],
            [ 5, 3.79, 23.36, 137.1, 80.6, 59.4, 2.98, 14.97, 124.9, 6.6, 6.2, "Karayal III" ],
            [ 2, 1.41, 23.77, 75.1, 18.3, 24.4, 2.28, 1.8, 111.85, 4.5, 4.3, "Murunga wee" ],
            [ 5, 4.14, 23.73, 147.8, 94, 64.9, 3, 12.28, 120.43, 4.6, 4.3, "Matara wee" ],
            [ 2, 3.15, 22.53, 108.5, 55.1, 51.2, 3.17, 7.27, 123.15, 4.6, 4.2, "Kaharamana I" ],
            [ 1, 1.66, 23.56, 97.6, 52.2, 55.5, 2.01, 3.4, 108.6, 3.8, 3.3, "Karabewa" ],
            [ 1, 1.63, 22.78, 96.4, 64.9, 68.4, 2, 3.71, 99.58, 3.4, 2.9, "Halabewa" ],
            [ 1, 1.53, 23.41, 58.4, 33, 58.2, 3.16, 3.71, 109.83, 3.9, 3.6, "Yakada wee I" ],
            [ 5, 3.02, 23.3, 110.1, 87.7, 79.8, 3.02, 8.12, 73.9, 3.4, 3.1, "Lumbini I" ],
            [ 1, 1.64, 21.69, 72.3, 36.3, 47.9, 2.69, 3.08, 79.4, 3.3, 3.1, "Polayal II" ],
            [ 5, 3.49, 25.14, 147.5, 106, 72.1, 2.57, 10.49, 73.18, 4.1, 3.9, "Heendik wee" ],
            [ 6, 3.49, 26.19, 173.9, 138.8, 80.2, 2.18, 17.43, 125.48, 6.1, 5.8, "Kahata Samba" ],
            [ 3, 1.87, 20.44, 141.2, 86.1, 62.3, 1.53, 8.52, 106.13, 7.5, 6.4, "Muthumanikam" ],
            [ 2, 2.52, 24.36, 103.8, 74.1, 71.8, 2.71, 9.85, 151.45, 6.5, 4.9, "Induru Karayal" ],
            [ 3, 1.79, 22.41, 96, 43.5, 45.5, 2.18, 6.23, 119.15, 7.3, 6.6, "Kalu gires" ],
            [ 5, 3.02, 22.66, 172.7, 111.8, 65, 1.92, 6.6, 98.2, 3.5, 3.1, "Madabaru" ],
            [ 2, 1.71, 21.41, 69.3, 30.5, 44.2, 2.9, 4.6, 97.15, 6.5, 5.2, "Balakara" ],
            [ 4, 2.07, 28.76, 94.4, 57.4, 61.1, 2.51, 7.18, 89.48, 6.7, 5.3, "Buruma Thavalu" ],
            [ 5, 4.05, 25.08, 171.5, 117.6, 68.6, 2.42, 8.36, 96.33, 3.9, 3, "Batticaloa" ],
            [ 4, 2.42, 25.24, 97.3, 67.7, 71, 2.78, 10.44, 98.5, 7, 5.5, "H 10" ],
            [ 3, 2.3, 23.18, 101.6, 71.9, 71, 2.56, 9.31, 113.48, 5.9, 5, "Manchel Perunel" ],
            [ 3, 1.85, 26.46, 97.6, 59.8, 62.6, 2.21, 9.3, 122.15, 8.2, 7.1, "Thunmar Hamara" ],
            [ 2, 2.87, 20.38, 101.2, 53.8, 55.1, 3.13, 8.74, 120.98, 6.1, 5.2, "Dingiri Menika" ],
            [ 3, 2.55, 22.23, 105.2, 78.8, 74.8, 2.72, 13.77, 119.83, 7.1, 6.5, "Madael" ],
            [ 4, 1.7, 32.26, 120.3, 93.2, 77.4, 1.66, 9.67, 112.5, 7.3, 6.3, "Miti Riyan" ],
            [ 3, 1.57, 24.91, 94.9, 69, 72.4, 1.21, 4.36, 119.3, 6, 5.3, "Suduru Samba II" ],
            [ 6, 3.89, 26.28, 167.2, 137.5, 82, 2.5, 21.82, 112.25, 7.3, 6.4, "Gangala" ],
            [ 3, 1.54, 23.03, 104.2, 77.4, 73.6, 1.48, 7.51, 108.45, 7.3, 6.5, "Heenpodi wee" ],
            [ 1, 1.45, 24.01, 107.8, 56.4, 52.3, 1.62, 4.74, 92.15, 5.5, 5.2, "Sinnanayan 398" ],
            [ 3, 1.49, 24.73, 129.8, 102.5, 79, 1.05, 5.59, 108.48, 5.8, 5.1, "Geeraga Samba" ],
            [ 2, 3.8, 30.64, 140.8, 33.7, 24.3, 2.91, 4.1, 128.15, 4.6, 4.2, "Dik wee 328" ],
            [ 4, 2.24, 27.84, 104.2, 81.2, 77.6, 2.44, 8.04, 103.38, 4.6, 4.1, "MI 329" ],
            [ 4, 1.87, 25.03, 156.5, 131, 82.8, 1.39, 12.25, 107.68, 8.6, 6.7, "Suwanda Samba" ],
            [ 5, 3.88, 23.54, 164.7, 137.8, 83.1, 2.54, 12.13, 113.45, 3.7, 3.5, "Madael Galle" ],
            [ 5, 4.29, 19.86, 144.1, 116.4, 78.7, 3.03, 17.57, 116.53, 5.6, 4.9, "Ratnapura" ],
            [ 2, 4.52, 29.83, 168, 81.7, 48.7, 2.61, 10.31, 111.73, 5.7, 4.8, "Badulla" ],
            [ 5, 4.11, 24.03, 170.1, 143.8, 84, 2.59, 14.68, 118.9, 5.6, 4.4, "Madael Kalutara" ],
            [ 6, 3.47, 22.88, 189.6, 157.8, 83.2, 1.99, 21.8, 119.45, 7.4, 6.9, "Ratnapura" ],
            [ 6, 4.99, 26.81, 181.6, 154.3, 84.6, 3.81, 31.04, 118.88, 5.8, 5.3, "EAT Samba" ],
            [ 4, 3.42, 25.03, 121, 96.9, 79.9, 3.05, 14.55, 116.03, 5.3, 4.9, "Sirappu Paleusithri" ],
            [ 2, 2.46, 22.59, 178.2, 39.4, 22.2, 1.54, 3.02, 106.93, 6.1, 5.1, "Muthu Samba" ],
            [ 5, 3.51, 21.26, 171.4, 149.7, 82.4, 2.33, 16.05, 109.28, 5.4, 4.5, "Podi sudu wee" ],
            [ 5, 2.34, 22.57, 133.3, 109.1, 81.6, 1.98, 4.11, 99.98, 2.5, 2.1, "Wanni Heenati" ],
            [ 4, 2.97, 23.15, 118.6, 92.7, 77.8, 2.75, 10.88, 98.38, 5.5, 4.7, "BG 35-2" ],
            [ 4, 2.58, 25.24, 111.8, 87.2, 77.2, 2.57, 13.3, 98.63, 7.3, 5.9, "BG 35-7" ],
            [ 3, 2.15, 24.05, 103.7, 77.2, 74.1, 2.36, 8.72, 96, 6, 5.3, "BG 34-8" ],
            [ 5, 3.8, 23, 181.2, 155, 85.6, 2.27, 11.31, 99.08, 4, 3.3, "A 6-10-37" ],
            [ 1, 1.44, 28.98, 55.6, 30.4, 52.5, 2.61, 2.6, 111.28, 3.8, 3.4, "Periamorungan" ],
            [ 3, 2.45, 20.88, 100.7, 74.4, 73.1, 2.7, 11.22, 120.85, 6, 5.7, "Mudukiriel" ],
            [ 4, 1.02, 26.02, 173.1, 145.3, 83.9, 0.66, 5.21, 91.1, 6.8, 6.1, "Suduru Samba III" ],
            [ 4, 3.66, 24.78, 137.5, 111.3, 79.7, 2.87, 15.61, 97.95, 5.4, 4.9, "Kaharamana II" ],
            [ 4, 2.91, 24.45, 127.2, 101, 79.3, 2.53, 17.01, 88.7, 7, 6.7, "Bala Ma wee II" ],
            [ 3, 2.05, 23.07, 89.3, 63.1, 70.7, 2.29, 7.53, 89.65, 5.6, 5.2, "Chinnapodiyan" ],
            [ 4, 2.48, 29, 116, 89.8, 77.3, 2.14, 9.75, 117.4, 5.5, 5, "Kiri Murunga wee" ],
            [ 5, 4.04, 23.54, 167.7, 141.6, 83.7, 2.6, 18.22, 86.33, 5.4, 5, "Heendikki" ],
            [ 4, 3.71, 25.78, 133.4, 107.4, 80.2, 3, 16.15, 118.05, 5.4, 5, "Jamis wee I" ],
            [ 3, 1.69, 23.78, 82.6, 56.6, 68.1, 2.04, 5.72, 108.65, 5.1, 4.9, "Lumbini II" ],
            [ 5, 2.56, 24.77, 142.1, 115.8, 81.2, 2.01, 10.18, 87.93, 4.7, 4.4, "Sinnanayam" ],
            [ 3, 2.31, 20.95, 98.8, 75.2, 76.1, 2.64, 12.48, 128.7, 6.6, 6.3, "Yakada wee II" ],
            [ 6, 4.47, 26.62, 165, 121.5, 73.7, 2.89, 22.12, 133.8, 6.6, 6.3, "Jamis wee II" ],
            [ 6, 4.03, 23.9, 176.3, 150.3, 84.9, 2.47, 32.05, 129.33, 8.9, 8.7, "Bathkiri el" ],
            [ 6, 4.42, 27.26, 180, 154, 85.6, 2.63, 26.55, 122.78, 7, 6.6, "Kalukanda" ]
        ]; break;
        
        // Fisher's Iris data (https://en.wikipedia.org/wiki/Iris_flower_data_set).
        default: data = [
            [ "versicolor", 7, 3.2, 4.7, 1.4 ],
            [ "versicolor", 6.4, 3.2, 4.5, 1.5 ],
            [ "versicolor", 6.9, 3.1, 4.9, 1.5 ],
            [ "versicolor", 5.5, 2.3, 4, 1.3 ],
            [ "versicolor", 6.5, 2.8, 4.6, 1.5 ],
            [ "versicolor", 5.7, 2.8, 4.5, 1.3 ],
            [ "versicolor", 6.3, 3.3, 4.7, 1.6 ],
            [ "versicolor", 4.9, 2.4, 3.3, 1 ],
            [ "versicolor", 6.6, 2.9, 4.6, 1.3 ],
            [ "versicolor", 5.2, 2.7, 3.9, 1.4 ],
            [ "versicolor", 5, 2, 3.5, 1 ],
            [ "versicolor", 5.9, 3, 4.2, 1.5 ],
            [ "versicolor", 6, 2.2, 4, 1 ],
            [ "versicolor", 6.1, 2.9, 4.7, 1.4 ],
            [ "versicolor", 5.6, 2.9, 3.6, 1.3 ],
            [ "versicolor", 6.7, 3.1, 4.4, 1.4 ],
            [ "versicolor", 5.6, 3, 4.5, 1.5 ],
            [ "versicolor", 5.8, 2.7, 4.1, 1 ],
            [ "versicolor", 6.2, 2.2, 4.5, 1.5 ],
            [ "versicolor", 5.6, 2.5, 3.9, 1.1 ],
            [ "versicolor", 5.9, 3.2, 4.8, 1.8 ],
            [ "versicolor", 6.1, 2.8, 4, 1.3 ],
            [ "versicolor", 6.3, 2.5, 4.9, 1.5 ],
            [ "versicolor", 6.1, 2.8, 4.7, 1.2 ],
            [ "versicolor", 6.4, 2.9, 4.3, 1.3 ],
            [ "versicolor", 6.6, 3, 4.4, 1.4 ],
            [ "versicolor", 6.8, 2.8, 4.8, 1.4 ],
            [ "versicolor", 6.7, 3, 5, 1.7 ],
            [ "versicolor", 6, 2.9, 4.5, 1.5 ],
            [ "versicolor", 5.7, 2.6, 3.5, 1 ],
            [ "versicolor", 5.5, 2.4, 3.8, 1.1 ],
            [ "versicolor", 5.5, 2.4, 3.7, 1 ],
            [ "versicolor", 5.8, 2.7, 3.9, 1.2 ],
            [ "versicolor", 6, 2.7, 5.1, 1.6 ],
            [ "versicolor", 5.4, 3, 4.5, 1.5 ],
            [ "versicolor", 6, 3.4, 4.5, 1.6 ],
            [ "versicolor", 6.7, 3.1, 4.7, 1.5 ],
            [ "versicolor", 6.3, 2.3, 4.4, 1.3 ],
            [ "versicolor", 5.6, 3, 4.1, 1.3 ],
            [ "versicolor", 5.5, 2.5, 4, 1.3 ],
            [ "versicolor", 5.5, 2.6, 4.4, 1.2 ],
            [ "versicolor", 6.1, 3, 4.6, 1.4 ],
            [ "versicolor", 5.8, 2.6, 4, 1.2 ],
            [ "versicolor", 5, 2.3, 3.3, 1 ],
            [ "versicolor", 5.6, 2.7, 4.2, 1.3 ],
            [ "versicolor", 5.7, 3, 4.2, 1.2 ],
            [ "versicolor", 5.7, 2.9, 4.2, 1.3 ],
            [ "versicolor", 6.2, 2.9, 4.3, 1.3 ],
            [ "versicolor", 5.1, 2.5, 3, 1.1 ],
            [ "versicolor", 5.7, 2.8, 4.1, 1.3 ],
            [ "virginica", 6.3, 3.3, 6, 2.5 ],
            [ "virginica", 5.8, 2.7, 5.1, 1.9 ],
            [ "virginica", 7.1, 3, 5.9, 2.1 ],
            [ "virginica", 6.3, 2.9, 5.6, 1.8 ],
            [ "virginica", 6.5, 3, 5.8, 2.2 ],
            [ "virginica", 7.6, 3, 6.6, 2.1 ],
            [ "virginica", 4.9, 2.5, 4.5, 1.7 ],
            [ "virginica", 7.3, 2.9, 6.3, 1.8 ],
            [ "virginica", 6.7, 2.5, 5.8, 1.8 ],
            [ "virginica", 7.2, 3.6, 6.1, 2.5 ],
            [ "virginica", 6.5, 3.2, 5.1, 2 ],
            [ "virginica", 6.4, 2.7, 5.3, 1.9 ],
            [ "virginica", 6.8, 3, 5.5, 2.1 ],
            [ "virginica", 5.7, 2.5, 5, 2 ],
            [ "virginica", 5.8, 2.8, 5.1, 2.4 ],
            [ "virginica", 6.4, 3.2, 5.3, 2.3 ],
            [ "virginica", 6.5, 3, 5.5, 1.8 ],
            [ "virginica", 7.7, 3.8, 6.7, 2.2 ],
            [ "virginica", 7.7, 2.6, 6.9, 2.3 ],
            [ "virginica", 6, 2.2, 5, 1.5 ],
            [ "virginica", 6.9, 3.2, 5.7, 2.3 ],
            [ "virginica", 5.6, 2.8, 4.9, 2 ],
            [ "virginica", 7.7, 2.8, 6.7, 2 ],
            [ "virginica", 6.3, 2.7, 4.9, 1.8 ],
            [ "virginica", 6.7, 3.3, 5.7, 2.1 ],
            [ "virginica", 7.2, 3.2, 6, 1.8 ],
            [ "virginica", 6.2, 2.8, 4.8, 1.8 ],
            [ "virginica", 6.1, 3, 4.9, 1.8 ],
            [ "virginica", 6.4, 2.8, 5.6, 2.1 ],
            [ "virginica", 7.2, 3, 5.8, 1.6 ],
            [ "virginica", 7.4, 2.8, 6.1, 1.9 ],
            [ "virginica", 7.9, 3.8, 6.4, 2 ],
            [ "virginica", 6.4, 2.8, 5.6, 2.2 ],
            [ "virginica", 6.3, 2.8, 5.1, 1.5 ],
            [ "virginica", 6.1, 2.6, 5.6, 1.4 ],
            [ "virginica", 7.7, 3, 6.1, 2.3 ],
            [ "virginica", 6.3, 3.4, 5.6, 2.4 ],
            [ "virginica", 6.4, 3.1, 5.5, 1.8 ],
            [ "virginica", 6, 3, 4.8, 1.8 ],
            [ "virginica", 6.9, 3.1, 5.4, 2.1 ],
            [ "virginica", 6.7, 3.1, 5.6, 2.4 ],
            [ "virginica", 6.9, 3.1, 5.1, 2.3 ],
            [ "virginica", 5.8, 2.7, 5.1, 1.9 ],
            [ "virginica", 6.8, 3.2, 5.9, 2.3 ],
            [ "virginica", 6.7, 3.3, 5.7, 2.5 ],
            [ "virginica", 6.7, 3, 5.2, 2.3 ],
            [ "virginica", 6.3, 2.5, 5, 1.9 ],
            [ "virginica", 6.5, 3, 5.2, 2 ],
            [ "virginica", 6.2, 3.4, 5.4, 2.3 ],
            [ "virginica", 5.9, 3, 5.1, 1.8 ],
            [ "setosa", 5.1, 3.5, 1.4, 0.2 ],
            [ "setosa", 4.9, 3, 1.4, 0.2 ],
            [ "setosa", 4.7, 3.2, 1.3, 0.2 ],
            [ "setosa", 4.6, 3.1, 1.5, 0.2 ],
            [ "setosa", 5, 3.6, 1.4, 0.2 ],
            [ "setosa", 5.4, 3.9, 1.7, 0.4 ],
            [ "setosa", 4.6, 3.4, 1.4, 0.3 ],
            [ "setosa", 5, 3.4, 1.5, 0.2 ],
            [ "setosa", 4.4, 2.9, 1.4, 0.2 ],
            [ "setosa", 4.9, 3.1, 1.5, 0.1 ],
            [ "setosa", 5.4, 3.7, 1.5, 0.2 ],
            [ "setosa", 4.8, 3.4, 1.6, 0.2 ],
            [ "setosa", 4.8, 3, 1.4, 0.1 ],
            [ "setosa", 4.3, 3, 1.1, 0.1 ],
            [ "setosa", 5.8, 4, 1.2, 0.2 ],
            [ "setosa", 5.7, 4.4, 1.5, 0.4 ],
            [ "setosa", 5.4, 3.9, 1.3, 0.4 ],
            [ "setosa", 5.1, 3.5, 1.4, 0.3 ],
            [ "setosa", 5.7, 3.8, 1.7, 0.3 ],
            [ "setosa", 5.1, 3.8, 1.5, 0.3 ],
            [ "setosa", 5.4, 3.4, 1.7, 0.2 ],
            [ "setosa", 5.1, 3.7, 1.5, 0.4 ],
            [ "setosa", 4.6, 3.6, 1, 0.2 ],
            [ "setosa", 5.1, 3.3, 1.7, 0.5 ],
            [ "setosa", 4.8, 3.4, 1.9, 0.2 ],
            [ "setosa", 5, 3, 1.6, 0.2 ],
            [ "setosa", 5, 3.4, 1.6, 0.4 ],
            [ "setosa", 5.2, 3.5, 1.5, 0.2 ],
            [ "setosa", 5.2, 3.4, 1.4, 0.2 ],
            [ "setosa", 4.7, 3.2, 1.6, 0.2 ],
            [ "setosa", 4.8, 3.1, 1.6, 0.2 ],
            [ "setosa", 5.4, 3.4, 1.5, 0.4 ],
            [ "setosa", 5.2, 4.1, 1.5, 0.1 ],
            [ "setosa", 5.5, 4.2, 1.4, 0.2 ],
            [ "setosa", 4.9, 3.1, 1.5, 0.2 ],
            [ "setosa", 5, 3.2, 1.2, 0.2 ],
            [ "setosa", 5.5, 3.5, 1.3, 0.2 ],
            [ "setosa", 4.9, 3.6, 1.4, 0.1 ],
            [ "setosa", 4.4, 3, 1.3, 0.2 ],
            [ "setosa", 5.1, 3.4, 1.5, 0.2 ],
            [ "setosa", 5, 3.5, 1.3, 0.3 ],
            [ "setosa", 4.5, 2.3, 1.3, 0.3 ],
            [ "setosa", 4.4, 3.2, 1.3, 0.2 ],
            [ "setosa", 5, 3.5, 1.6, 0.6 ],
            [ "setosa", 5.1, 3.8, 1.9, 0.4 ],
            [ "setosa", 4.8, 3, 1.4, 0.3 ],
            [ "setosa", 5.1, 3.8, 1.6, 0.2 ],
            [ "setosa", 4.6, 3.2, 1.4, 0.2 ],
            [ "setosa", 5.3, 3.7, 1.5, 0.2 ],
            [ "setosa", 5, 3.3, 1.4, 0.2 ]
        ] ; break;
    }
    return data;
};

export default Data;
