using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;
using System;

public class DiceManager : MonoBehaviour
{
    public string DiceNum;
    public string DiceBonif;
    public string Modificador;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    public void DiceNumModified(string dices)
    {
        DiceNum = dices;
    }

    public void DiceBonifModified(string dicesBonif)
    {
        DiceBonif = dicesBonif;
    }

    public void ModificadorModified(string modif)
    {
        Modificador = modif;
    }

    public void RollDices()
    {
        int totalRolls = int.Parse(DiceNum) + int.Parse(DiceBonif);
        int[] allRolls = new int[totalRolls];

        for (int i = 0; i < totalRolls; i++)
        {
            allRolls[i] = UnityEngine.Random.Range(1, 7);
        }

        Array.Sort(allRolls, new Comparison<int>((i1, i2) => i2.CompareTo(i1)));

        var bestRolls = allRolls.ToList().Take(int.Parse(DiceNum)).ToArray();

        // TODO: Mostrar los dados buenos
    }
}
