using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pruebas
{
    public class Pato : FaunaTerrestre
    {
        public bool EsCarnivoro { get; set; }
        public Pato(bool EsCarnivoro)
        {
            this.EsCarnivoro = EsCarnivoro;
        }
        public Pato()
        {

        }
    }
}
