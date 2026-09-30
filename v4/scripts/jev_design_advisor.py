import os
import sys
import json
import urllib.request
import urllib.error

# Jev AI Design Advisor
# This script uses TypeSafe's Jev AI (System One model) to evaluate design decisions.
# It can be used to decide on layout structures, content categorization, and visual hierarchy.

def get_design_decision(question, state_context, options):
    """
    Calls the TypeSafe API to make a design decision using the Choice primitive.
    """
    # The user should set the TYPESAFE_API_KEY environment variable before running this script
    api_key = os.environ.get("TYPESAFE_API_KEY")
    if not api_key:
        print(json.dumps({"error": "TYPESAFE_API_KEY environment variable is missing. Please set it before running this script."}))
        sys.exit(1)
        
    url = "https://api.typesafe.ai/v1/systemone"
    
    payload = {
        "model": "jev-latest",
        "state": state_context,
        "questions": {
            "design_decision": {
                "type": "choice",
                "instructions": question,
                "criteria": options
            }
        }
    }
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers, method='POST')
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode())
            return result
    except urllib.error.HTTPError as e:
        print(json.dumps({"error": f"API Error: {e.code} - {e.read().decode()}"}))
        sys.exit(1)
    except Exception as e:
        print(json.dumps({"error": f"Request failed: {str(e)}"}))
        sys.exit(1)

if __name__ == '__main__':
    # We expect a JSON payload on stdin containing 'question', 'state', and 'options'
    try:
        input_data = sys.stdin.read()
        if not input_data.strip():
            print(json.dumps({"error": "No input provided. Please provide JSON with 'question', 'state', and 'options'."}))
            sys.exit(1)
            
        data = json.loads(input_data)
        question = data.get("question")
        state = data.get("state", {})
        options = data.get("options", {})
        
        if not question or not options:
            print(json.dumps({"error": "Both 'question' and 'options' are required in the input JSON."}))
            sys.exit(1)
            
        decision = get_design_decision(question, state, options)
        print(json.dumps(decision, indent=2))
        
    except json.JSONDecodeError:
        print(json.dumps({"error": "Invalid JSON input."}))
        sys.exit(1)
