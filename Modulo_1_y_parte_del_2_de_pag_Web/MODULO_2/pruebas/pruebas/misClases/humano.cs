using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pruebas
{
    class Humano
    {
        //defino las propiedades
        private int altura; //valor en centimetros
        private double peso; //valor en kg
        private string nombre;
        private char sexo;
        private bool vivo;

        public void setAltura(int valorAltura)
        {

            this.altura = valorAltura;
        
        }
        public void setPeso(double valorPeso)
        {

            this.peso = valorPeso;
        }
        public void setNombre(string valorNombre)
        {

            this.nombre = valorNombre;

        }
        public void setSexo(char valorSexo)
        {

            this.sexo = valorSexo;
        }
        public void setVivo(bool valorVivo)
        {

            this.vivo = valorVivo;
        }
        public int getAltura() {
            return this.altura;
        }
        public double getPeso()
        {
            return this.peso;
        }
        public string getNombre()
        {
            return this.nombre;
        }
        public char getSexo()
        {
            return this.sexo;
        }
        public bool getVivo()
        {
            return this.vivo;
        }


















































    }
}
