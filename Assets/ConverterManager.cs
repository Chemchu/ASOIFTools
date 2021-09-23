using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using System;

public class ConverterManager : MonoBehaviour
{
    public TMP_InputField DivisaInicialInputText;
    public TMP_InputField DivisaFinalInputText;

    public TMP_Dropdown DivisaInicialDropdown;
    public TMP_Dropdown DivisaFinalDropdown;

    private Divisa DivisaInicial = Divisa.CopperStar;
    private Divisa DivisaFinal = Divisa.CopperStar;

    public enum Divisa
    {
        CopperStar,
        SilverStag,
        GoldenDragon
    }

    void Start()
    {
        DivisaInicialInputText.text = "0";
        DivisaFinalInputText.text = "0";

        DivisaInicialInputText.onValueChanged.AddListener(delegate { ValorDivisaInicialChanged(DivisaInicialInputText); });
        DivisaFinalInputText.onValueChanged.AddListener(delegate { ValorDivisaFinalChanged(DivisaFinalInputText); });

        DivisaInicialDropdown.onValueChanged.AddListener(delegate { DivisaInicialChanged(DivisaInicialDropdown); });
        DivisaFinalDropdown.onValueChanged.AddListener(delegate { DivisaFinalChanged(DivisaFinalDropdown); });
    }

    private void ValorDivisaInicialChanged(TMP_InputField fieldChanged)
    {
        float value;
        if (fieldChanged.text == "") value = 0;
        else value = int.Parse(fieldChanged.text);

        DivisaFinalInputText.text = string.Format("{0}", ConvertDivisa(value, DivisaInicial, DivisaFinal));
    }

    private void ValorDivisaFinalChanged(TMP_InputField fieldChanged)
    {
        float value;
        if (fieldChanged.text == "") value = 0;
        else value = int.Parse(fieldChanged.text);

        DivisaInicialInputText.text = string.Format("{0}", ConvertDivisa(value, DivisaInicial, DivisaFinal));
    }

    private void DivisaInicialChanged(TMP_Dropdown dropdown)
    {
        DivisaInicial = (Divisa)Enum.Parse(typeof(Divisa), dropdown.options[dropdown.value].text, true);
    }

    private void DivisaFinalChanged(TMP_Dropdown dropdown)
    {
        DivisaFinal = (Divisa)Enum.Parse(typeof(Divisa), dropdown.options[dropdown.value].text, true);
    }

    private float ConvertDivisa(float valorInicial, Divisa monedaInicial, Divisa monedaFinal)
    {
        switch(monedaInicial)
        {
            case Divisa.CopperStar:
                if (monedaFinal == Divisa.SilverStag) return valorInicial / 7;
                if (monedaFinal == Divisa.GoldenDragon) return valorInicial / 1470;
                break;

            case Divisa.SilverStag:
                if (monedaFinal == Divisa.CopperStar) return valorInicial * 7;
                if (monedaFinal == Divisa.GoldenDragon) return valorInicial / 210;
                break;

            case Divisa.GoldenDragon:
                if (monedaFinal == Divisa.SilverStag) return valorInicial * 210;
                if (monedaFinal == Divisa.CopperStar) return valorInicial * 1470;
                break;
        }

        return valorInicial;
    }
}
