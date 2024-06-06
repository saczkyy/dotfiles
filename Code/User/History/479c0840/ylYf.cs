using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace pocz
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }


        private void przycisk_Click(object sender, RoutedEventArgs e)
        {
            if(pocztowka.IsChecked == true)
            {
                pocztowka1.Visibility = Visibility.Visible;
                paczka1.Visibility = Visibility.Hidden;
                list1.Visibility = Visibility.Hidden;
                cena.Text = "Cena: 1zl";
            }
            if(paczka.IsChecked== true)
            {
                paczka1.Visibility = Visibility.Visible;
                pocztowka1.Visibility = Visibility.Hidden;
                list1.Visibility = Visibility.Hidden;
                cena.Text = "Cena: 10zl";
            }
            if(list.IsChecked == true)
            {
                list1.Visibility = Visibility.Visible;
                paczka1.Visibility = Visibility.Hidden;
                pocztowka1.Visibility = Visibility.Hidden;
                cena.Text = "Cena: 1,5zl";
            }
        }

        private void zat_Click(object sender, RoutedEventArgs e)
        {
            
            var isNumeric = int.TryParse(kod.Text, out int n);
            if (kod.Text.Length == 5) {

                if (isNumeric== true)
                {
                    MessageBox.Show("Dane przesyłki zostały wprowadzone");

                } else
                {
                    MessageBox.Show("Kod pocztowy powinien się składać z samych cyfr") ;



                }
            } else
            {
                MessageBox.Show("Nieprawidłowa liczba cyfr w kodzie pocztowym"); ;

            }
            
        }
    }
}
