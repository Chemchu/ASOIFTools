using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class InputBehaviour : MonoBehaviour
{
    public TMP_InputField.CharacterValidation CharacterType;
    private TMP_InputField Input;

    // Start is called before the first frame update
    void Start()
    {
        Input = gameObject.GetComponent<TMP_InputField>();
        Input.characterValidation = CharacterType;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
