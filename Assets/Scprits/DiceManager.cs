using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Linq;
using System;
using TMPro;

public class DiceManager : MonoBehaviour
{
    public string DiceNum = "0";
    public string DiceBonif = "0";
    public string Modificador = "0";

    public Image RollBtnImage;
    public TMP_Text ResultTotalText;
    public TMP_Text ResultDicesText;

    private bool CanRoll;

    // Start is called before the first frame update
    void Start()
    {
        ResultTotalText.text = "";
        ResultDicesText.text = "";

        DiceNum = "0";
        DiceBonif = "0";
        Modificador = "0";
    }

    private void Update()
    {
        CheckRollStatus();
    }

    private void CheckRollStatus()
    {
        if (DiceNum == null) return;
        if (DiceBonif == null) return;
        if (Modificador == null) return;

        if (DiceNum == "" || DiceNum == "0" || DiceBonif == "" || Modificador == "")
        {
            RollBtnImage.color = new Color(RollBtnImage.color.r, RollBtnImage.color.g, RollBtnImage.color.b, 0f);
            CanRoll = false;
        }
        else
        {
            RollBtnImage.color = new Color(RollBtnImage.color.r, RollBtnImage.color.g, RollBtnImage.color.b, 1);
            CanRoll = true;
        }
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
        if (!CanRoll) return;

        int totalRolls = int.Parse(DiceNum) + int.Parse(DiceBonif);
        int[] allRolls = new int[totalRolls];

        for (int i = 0; i < totalRolls; i++)
        {
            allRolls[i] = UnityEngine.Random.Range(1, 7);
        }

        Array.Sort(allRolls, new Comparison<int>((i1, i2) => i2.CompareTo(i1)));

        var bestRolls = allRolls.ToList().Take(int.Parse(DiceNum)).ToArray();

        int resultSum = 0;
        string resultDices = "";
        foreach(int valor in bestRolls)
        {
            resultSum += valor;
            resultDices += valor + " + ";
        }
        resultDices += string.Format("({0})", Modificador);
        resultSum += int.Parse(Modificador);

        ResultTotalText.text = string.Format("{0}", resultSum);
        ResultDicesText.text = string.Format("{0}", resultDices);
    }
}
