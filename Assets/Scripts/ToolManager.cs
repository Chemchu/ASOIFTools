using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ToolManager : MonoBehaviour
{
    public Image DiceImage; 
    public Image CoinImage;

    public GameObject DiceRollerTool;
    public GameObject ConversorTool;

    public AudioClip ToolSound;

    public ToolState CurrentState
    {
        get => currentState;
        set
        {
            if (currentState == value) return;

            switch(value)
            {
                case ToolState.Dice:
                    EnableDicer();
                    break;
                case ToolState.Converter:
                    EnableConverter();
                    break;
            }

            currentState = value;
        }
    }
    private ToolState currentState;

    public enum ToolState
    {
        Dice,
        Converter
    }

    void Start()
    {
        CurrentState = ToolState.Dice;
    }

    public void SelectDiceRoller()
    { 
        CurrentState = ToolState.Dice;
    }

    public void SelectConverter()
    {
        CurrentState = ToolState.Converter;
    }

    private void EnableDicer()
    {
        DiceImage.gameObject.SetActive(true);
        CoinImage.gameObject.SetActive(false);

        DiceRollerTool.SetActive(true);
        ConversorTool.SetActive(false);
    }

    private void EnableConverter()
    {
        DiceImage.gameObject.SetActive(false);
        CoinImage.gameObject.SetActive(true);

        DiceRollerTool.SetActive(false);
        ConversorTool.SetActive(true);
    }
}
