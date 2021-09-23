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

    private bool IsDivisaInicialSeleccionada;
    private bool IsDivisaFinalSeleccionada;

    private float ValorDivisaInicial;
    private float ValorDivisaFinal;

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
        DivisaInicialInputText.onSelect.AddListener(delegate { DivisaInicialSeleccionada(DivisaInicialInputText); });

        DivisaFinalInputText.onValueChanged.AddListener(delegate { ValorDivisaFinalChanged(DivisaFinalInputText); });
        DivisaFinalInputText.onSelect.AddListener(delegate { DivisaFinalSeleccionada(DivisaFinalInputText); });

        DivisaInicialDropdown.onValueChanged.AddListener(delegate { DivisaInicialChanged(DivisaInicialDropdown); });
        DivisaFinalDropdown.onValueChanged.AddListener(delegate { DivisaFinalChanged(DivisaFinalDropdown); });
    }
    private void DivisaInicialSeleccionada(TMP_InputField fieldChanged)
    {
        IsDivisaInicialSeleccionada = true;
        IsDivisaFinalSeleccionada = false;
    }

    private void DivisaFinalSeleccionada(TMP_InputField fieldChanged)
    {
        IsDivisaInicialSeleccionada = false;
        IsDivisaFinalSeleccionada = true;
    }

    private void ValorDivisaInicialChanged(TMP_InputField fieldChanged)
    {
        if (!IsDivisaInicialSeleccionada) return;

        if (fieldChanged.text == "") ValorDivisaInicial = 0;
        else ValorDivisaInicial = int.Parse(fieldChanged.text);

        DivisaFinalInputText.text = string.Format("{0}", ConvertDivisa(ValorDivisaInicial, DivisaInicial, DivisaFinal));
    }   

    private void ValorDivisaFinalChanged(TMP_InputField fieldChanged)
    {
        if (!IsDivisaFinalSeleccionada) return;

        if (fieldChanged.text == "") ValorDivisaFinal = 0;
        else ValorDivisaFinal = int.Parse(fieldChanged.text);

        DivisaInicialInputText.text = string.Format("{0}", ConvertDivisa(ValorDivisaFinal, DivisaFinal, DivisaInicial));
    }

    private void DivisaInicialChanged(TMP_Dropdown dropdown)
    {
        DivisaInicial = (Divisa)Enum.Parse(typeof(Divisa), dropdown.options[dropdown.value].text, true);

        DivisaInicialInputText.text = string.Format("{0}", ConvertDivisa(ValorDivisaInicial, DivisaFinal, DivisaInicial));
    }

    private void DivisaFinalChanged(TMP_Dropdown dropdown)
    {
        DivisaFinal = (Divisa)Enum.Parse(typeof(Divisa), dropdown.options[dropdown.value].text, true);

        DivisaFinalInputText.text = string.Format("{0}", ConvertDivisa(ValorDivisaInicial, DivisaInicial, DivisaFinal));
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
