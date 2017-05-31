using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pruebas
{
    class Program
    {
        static void Main(string[] args)
        {
            //int[] listaNumeros = new int[10];
            //listaNumeros[0] = 345;
            //listaNumeros[listaNumeros.Length-1] = 1000;
            //string[] listaCadenas = new string[10];
            //for (int i = 0 ; i<listaCadenas.Length; i++)
            //{
            //    listaCadenas[i] = i + "";
            //    Console.WriteLine("El valor es : " + listaCadenas[i]);
            //}

            int[] misImpares = getImpares(1000, 1010);



            Console.ReadKey();
        }



        //static void getPares (int limiteSuperior, int limiteInferior)
        //{
        //    //int[] listaNumeros = new int[10];
        //    //listaNumeros[0] = 345;
        //    //listaNumeros[listaNumeros.Length-1] = 1000;
        //    int[] pares = new int[limiteSuperior];
        //    int i = limiteInferior;
        //    while (i < limiteInferior) ;
        //    {
                
        //        if ((i % 2) == 0)
        //        {
        //            pares[i] = i;
        //            Console.WriteLine(pares[i]);
        //        }
        //    }
        //}
        static int[] getImpares(int limiteInferior, int limiteSuperior)
        {
            //int[] listaNumeros = new int[10];
            //listaNumeros[0] = 345;
            //listaNumeros[listaNumeros.Length-1] = 1000;
            int tamanio = ((limiteSuperior - limiteInferior) / 2) + 1;

            int[] impares = new int[tamanio];
            int i = limiteInferior;
            int numerosImparesAniadido = 0;
            while (i < limiteSuperior)
            {

                if ((i % 2) != 0)
                {
                    impares[numerosImparesAniadido] = i;
                    numerosImparesAniadido++;
                }
                i++;
            }
            return impares;
        }


        static void Test2 ()
        {
            FaunaTerrestre fauna = new FaunaTerrestre();
            Pinguino pinguino = new Pinguino();
            Pato pato = new Pato();
            pato.EsCarnivoro = false;
            Pato pato2 = new Pato();

            Console.WriteLine(pato.EsCarnivoro);
            Console.ReadKey();

        }
        static void Test1()
        {
            string saludo = "HOLA MUNDO!!";
            Console.WriteLine();
            Console.WriteLine(saludo);
            Console.WriteLine(saludo + " cruel");
            // un objeto es la instancia de una clase
            //humano Humano = new humano();
            //^      ^
            //                         |      |
            //esto es un objeto// Esto es una instancia   
            //TRATO DE USAR LA CLASE HUMANO
            //string texto = "";
            Humano humano = new Humano();
            humano.setAltura(184);
            Console.WriteLine("Altura del humano: " + humano.getAltura());
            humano.setAltura(100);
            Console.WriteLine("Altura del humano: " + humano.getAltura());
            humano.setPeso(150);
            Console.WriteLine("Peso del humano: " + humano.getPeso());
            humano.setPeso(120);
            Console.WriteLine("Peso del humano: " + humano.getPeso());
            humano.setNombre("Pepito");
            Console.WriteLine("Nombre del humano: " + humano.getNombre());
            humano.setNombre("Juanito");
            Console.WriteLine("Nombre del humano: " + humano.getNombre());
            humano.setSexo('M');
            Console.WriteLine("Sexo del humano: " + humano.getSexo());
            humano.setSexo('V');
            Console.WriteLine("Sexo del humano: " + humano.getSexo());
            //Humano.setVivo();
            //Console.WriteLine("Esta vivo el humano " + Humano.getVivo() + " ?");
            //Humano.setVivo();
            //Console.WriteLine("Esta vivo el humano " + Humano.getVivo() + " ?");






            Console.ReadKey();
        }
        static void Test3()
        {
            //Console.WriteLine("Numero de paramertros es: " + args.Length);
            //for (int i = 0; i < args.Length; i++)
            //{
            //    Console.WriteLine(args[i]);
            //}
        }
    }
}
